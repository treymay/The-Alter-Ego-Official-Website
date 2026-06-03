import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { CONTACT_EMAIL } from "@/lib/copy";

export const metadata = {
  title: "Contact | The Alter Ego",
  description: "Start your Shopify flagship or art direction project.",
};

export default function ContactPage() {
  return (
    <div className="px-4 pt-32 pb-24 md:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work"
          description="Tell us about your brand, timeline, and whether you need Shopify, art direction, or both."
        />

        <GlassContainer className="mt-10 p-6 md:p-8">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
            Email
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-heading mt-2 block text-magenta hover:text-ink"
          >
            {CONTACT_EMAIL}
          </a>
        </GlassContainer>

        <ContactForm />
      </div>
    </div>
  );
}
