import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { BlobNotFoundError, get, put } from "@vercel/blob";
import type { Review } from "@/lib/reviews";

type ReviewStore = {
  approved: Review[];
  pending: Review[];
};

const BLOB_PATHNAME = "reviews-store.json";
const FILE_STORE_PATH = path.join(process.cwd(), "data", "reviews.json");

const EMPTY_STORE: ReviewStore = { approved: [], pending: [] };

function useBlobStorage() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN) || Boolean(process.env.VERCEL);
}

async function readStoreFromFile(): Promise<ReviewStore> {
  try {
    const raw = await fs.readFile(FILE_STORE_PATH, "utf-8");
    return JSON.parse(raw) as ReviewStore;
  } catch {
    return { ...EMPTY_STORE };
  }
}

async function writeStoreToFile(store: ReviewStore) {
  await fs.mkdir(path.dirname(FILE_STORE_PATH), { recursive: true });
  await fs.writeFile(FILE_STORE_PATH, JSON.stringify(store, null, 2), "utf-8");
}

async function readStoreFromBlob(): Promise<ReviewStore> {
  try {
    const result = await get(BLOB_PATHNAME, { access: "private" });
    if (!result || result.statusCode !== 200 || !result.stream) {
      return { ...EMPTY_STORE };
    }
    const raw = await new Response(result.stream).text();
    return JSON.parse(raw) as ReviewStore;
  } catch (error) {
    if (error instanceof BlobNotFoundError) {
      return { ...EMPTY_STORE };
    }
    throw error;
  }
}

async function writeStoreToBlob(store: ReviewStore) {
  await put(BLOB_PATHNAME, JSON.stringify(store, null, 2), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

async function migrateFileStoreToBlobIfNeeded(blobStore: ReviewStore) {
  const isEmpty = blobStore.approved.length === 0 && blobStore.pending.length === 0;
  if (!isEmpty) return blobStore;

  const fileStore = await readStoreFromFile();
  const hasFileData =
    fileStore.approved.length > 0 || fileStore.pending.length > 0;
  if (!hasFileData) return blobStore;

  await writeStoreToBlob(fileStore);
  return fileStore;
}

async function readStore(): Promise<ReviewStore> {
  if (useBlobStorage()) {
    const blobStore = await readStoreFromBlob();
    return migrateFileStoreToBlobIfNeeded(blobStore);
  }
  return readStoreFromFile();
}

async function writeStore(store: ReviewStore) {
  if (useBlobStorage()) {
    await writeStoreToBlob(store);
    return;
  }
  await writeStoreToFile(store);
}

export async function getApprovedReviews() {
  const store = await readStore();
  return store.approved.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export async function getPendingReviews() {
  const store = await readStore();
  return store.pending.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export async function submitReview(input: {
  rating: number;
  businessName: string;
  role: string;
  message: string;
}) {
  const store = await readStore();
  const review: Review = {
    id: randomUUID(),
    rating: input.rating,
    businessName: input.businessName.trim(),
    role: input.role.trim(),
    message: input.message.trim(),
    createdAt: new Date().toISOString(),
  };
  store.pending.push(review);
  await writeStore(store);
  return review;
}

export async function approveReview(id: string) {
  const store = await readStore();
  const index = store.pending.findIndex((r) => r.id === id);
  if (index === -1) return null;
  const [review] = store.pending.splice(index, 1);
  store.approved.push(review);
  await writeStore(store);
  return review;
}

export async function rejectReview(id: string) {
  const store = await readStore();
  const index = store.pending.findIndex((r) => r.id === id);
  if (index === -1) return false;
  store.pending.splice(index, 1);
  await writeStore(store);
  return true;
}

export function verifyAdminToken(token: string | null) {
  const secret = process.env.REVIEW_ADMIN_SECRET;
  if (!secret) return false;
  return token === secret;
}
