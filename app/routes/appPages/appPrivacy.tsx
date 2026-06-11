import { useParams, Link } from "react-router";
import { ArrowLeft, Shield } from "lucide-react";

const EFFECTIVE_DATE = "June 11, 2026";
const CONTACT_EMAIL = "contact@40ambar.com";

export default function AppPrivacyPage() {
  const { appSlug } = useParams();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      {/* Back link */}
      <Link
        to={`/apps/${appSlug}`}
        className="inline-flex items-center gap-1 text-sm mb-10 transition-colors duration-300 ease-in-out hover:text-(--primary)"
      >
        <ArrowLeft size={16} />
        {appSlug}
      </Link>

      {/* Header */}
      <div className="flex items-start gap-3 mb-2">
        <Shield size={28} className="mt-1 shrink-0 text-(--primary)" />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
      </div>
      <p className="mt-3 text-sm opacity-60">
        Medication Reminder &mdash; Effective {EFFECTIVE_DATE}
      </p>

      <div className="mt-10 space-y-10 text-base leading-relaxed">

        {/* 1 — Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Overview</h2>
          <p>
            Medication Reminder is a personal health app that helps you track
            your medications and dosing schedule. We built it with a
            privacy-first principle: <strong>all of your data stays on your
            device</strong>. We do not run a backend server, we do not collect
            analytics, and we do not transmit any personal or health information
            over the internet.
          </p>
        </section>

        {/* 2 — Data We Collect */}
        <section>
          <h2 className="text-xl font-semibold mb-3">2. Data We Collect</h2>
          <p className="mb-4">
            The following information is created and stored exclusively on your
            device. None of it leaves your device unless you explicitly export
            or back it up yourself.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">Medication information</h3>
              <p className="opacity-80">
                Name, form (tablet, capsule, syrup, etc.), dosing schedule,
                time and dose per intake, usage notes (e.g. "after meal"),
                remaining stock count, and an optional photo you attach to
                identify the medication.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">Medication logs</h3>
              <p className="opacity-80">
                A record of each scheduled dose — including whether it was
                taken, skipped, or missed — along with the scheduled date and
                time, and the actual time you marked it as taken.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">App preferences</h3>
              <p className="opacity-80">
                Settings such as language, display theme, font size, and
                notification preferences (e.g. whether to show the medication
                name in notifications).
              </p>
            </div>
          </div>
        </section>

        {/* 3 — Permissions */}
        <section>
          <h2 className="text-xl font-semibold mb-3">
            3. Device Permissions
          </h2>
          <p className="mb-4">
            The app may request the following permissions. Each permission is
            optional; declining it only disables the related feature.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">Notifications</h3>
              <p className="opacity-80">
                Used to send local reminders when a scheduled dose is due. All
                notifications are generated on-device; no notification passes
                through an external server.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">
                Camera &amp; Photo Library
              </h3>
              <p className="opacity-80">
                Used only if you choose to attach a photo to a medication. The
                photo is stored locally in the app's data directory and is never
                uploaded anywhere.
              </p>
            </div>
          </div>
        </section>

        {/* 4 — Data Storage & Security */}
        <section>
          <h2 className="text-xl font-semibold mb-3">
            4. Data Storage &amp; Security
          </h2>
          <p>
            All data is persisted in your device's local storage using
            AsyncStorage. It is not synced to any cloud service by the app
            itself. If your device is protected by a PIN, biometrics, or
            encryption, that protection extends to the data stored by this app.
            We recommend keeping your device's OS up to date and lock screen
            enabled.
          </p>
        </section>

        {/* 5 — Data Sharing */}
        <section>
          <h2 className="text-xl font-semibold mb-3">5. Data Sharing</h2>
          <p>
            We do not sell, share, or disclose your data to any third party.
            There are no advertising SDKs, analytics libraries, or crash
            reporting services embedded in the app that would transmit your
            information elsewhere.
          </p>
        </section>

        {/* 6 — Data Deletion */}
        <section>
          <h2 className="text-xl font-semibold mb-3">6. Deleting Your Data</h2>
          <p>
            You can delete individual medications and their associated logs at
            any time from within the app. Uninstalling the app removes all
            locally stored data from your device permanently.
          </p>
        </section>

        {/* 7 — Children's Privacy */}
        <section>
          <h2 className="text-xl font-semibold mb-3">
            7. Children's Privacy
          </h2>
          <p>
            This app is not directed at children under the age of 13. We do not
            knowingly collect data from children. Because all data is stored
            locally and no account is created, there is no personal information
            we could collect from any user regardless of age.
          </p>
        </section>

        {/* 8 — Changes */}
        <section>
          <h2 className="text-xl font-semibold mb-3">
            8. Changes to This Policy
          </h2>
          <p>
            If we update this privacy policy, the new version will be published
            on this page with a revised effective date. We encourage you to
            review it periodically. Continued use of the app after changes are
            posted constitutes your acceptance of the updated policy.
          </p>
        </section>

        {/* 9 — Contact */}
        <section>
          <h2 className="text-xl font-semibold mb-3">9. Contact</h2>
          <p>
            If you have any questions or concerns about this privacy policy,
            please reach out at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline underline-offset-2 hover:text-(--primary) transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>

      </div>

      {/* Footer divider */}
      <div className="mt-12 pt-6 border-t border-(--border) text-sm opacity-50">
        Medication Reminder &mdash; Privacy Policy &mdash; {EFFECTIVE_DATE}
      </div>
    </div>
  );
}