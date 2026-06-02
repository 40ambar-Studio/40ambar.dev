import { ShieldIcon } from "../components/Icons";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      {/* Heading */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg"
          style={{
            backgroundColor: "color-mix(in srgb, var(--primary) 12%, transparent)",
            color: "var(--primary)",
          }}
        >
          <ShieldIcon size={20} />
        </div>
        <div>
          <h1
            className="text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ color: "var(--text)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Last updated: June 2, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div
        className="mt-10 space-y-6 rounded-xl p-6 sm:p-8"
        style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border)",
        }}
      >
        <Section title="Introduction">
          <p>
            This privacy policy explains how 40ambar.dev handles your
            information when you visit this website. I take your privacy
            seriously and am committed to being transparent about data
            practices.
          </p>
        </Section>

        <Section title="Information Collected">
          <p>
            This website does not collect any personal information unless you
            voluntarily provide it (for example, by submitting a contact form
            or sending an email). Standard server logs may record anonymous
            data such as browser type, referring page, and timestamps for
            operational purposes.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            This site uses a minimal cookie only for theme preference storage
            (light/dark mode). No tracking, advertising, or analytics cookies
            are used. You can disable cookies in your browser settings, though
            the theme preference will not persist across sessions.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p>
            This website may contain links to external sites (such as GitHub).
            I am not responsible for the privacy practices of those third-party
            services. Please review their respective privacy policies.
          </p>
        </Section>

        <Section title="Data Security">
          <p>
            Reasonable technical and organizational measures are taken to
            protect any data you submit. However, no method of transmission
            over the internet is completely secure.
          </p>
        </Section>

        <Section title="Your Rights">
          <p>
            Depending on your jurisdiction, you may have the right to access,
            correct, or delete any personal data held about you. To exercise
            these rights, please reach out via the contact information
            available on this site.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            This policy may be updated periodically. Any changes will be
            reflected on this page with an updated date at the top.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            If you have questions about this privacy policy, please open an
            issue on the GitHub repository associated with this project.
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        className="mb-2 text-base font-semibold"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>
      <div
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {children}
      </div>
    </div>
  );
}