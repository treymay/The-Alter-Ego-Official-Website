import { ContactForm } from "@/components/contact/ContactForm";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { CONTACT_EMAIL } from "@/lib/copy";
import Link from "next/link";

export const metadata = {
  title: "Contact | The Alter Ego",
  description: "Start your Shopify flagship or art direction project.",
};

const steps = [
  "Share your brand, timeline, and whether you need Shopify, art direction, or both.",
  "We respond with intentional next steps—not a generic intake funnel.",
  "Campaign to checkout, one visual world.",
];

export default function ContactPage() {
  return (
    <PageShell width="wide">
      <PageHero
        eyebrow="Contact"
        title="Let's work"
        description="Pure creative confidence. Glass fields, intentional motion, and a clear path to start."
        size="large"
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(280px,1fr)_1.4fr] lg:items-start">
        <aside className="space-y-6 lg:sticky lg:top-28">
          <GlassContainer className="p-8">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
              Email
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-heading mt-3 block break-all text-lg text-magenta hover:text-ink"
            >
              {CONTACT_EMAIL}
            </a>
          </GlassContainer>

          <GlassContainer className="p-8">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
              What happens next
            </p>
            <ol className="mt-5 space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-body text-sm font-bold text-brand-orange">
                    {i + 1}
                  </span>
                  <p className="font-body text-sm leading-relaxed text-ink/75">{step}</p>
                </li>
              ))}
            </ol>
          </GlassContainer>

          <Link
            href="/work"
            className="font-body inline-block text-xs font-semibold uppercase tracking-widest text-magenta hover:underline"
          >
            View case studies →
          </Link>
        </aside>

        <div>
          <ContactForm />
        </div>
      </div>
    </PageShell>
  );
}
