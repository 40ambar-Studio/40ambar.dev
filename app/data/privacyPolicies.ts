import type { PrivacyPolicy } from "~/types/privacy";

export const privacyPolicies: Record<string, PrivacyPolicy> = {
  pillgrim: {
    appSlug: "pillgrim",
    appName: "Pillgrim",
    effectiveDate: "June 11, 2026",
    contactEmail: "contact@40ambar.dev",
    sections: [
      {
        heading: "1. Overview",
        content: `<p>Pillgrim is a personal health app that helps you track your medications and dosing schedule. We built it with a privacy-first principle: <strong>all of your data stays on your device</strong>. We do not run a backend server, we do not collect analytics, and we do not transmit any personal or health information over the internet.</p>`,
      },
      {
        heading: "2. Data We Collect",
        content: `<p>The following information is created and stored exclusively on your device. None of it leaves your device unless you explicitly export or back it up yourself.</p>
<div class="space-y-4">
  <div>
    <h3 class="font-medium mb-1">Medication information</h3>
    <p class="opacity-80">Name, form (tablet, capsule, syrup, etc.), dosing schedule, time and dose per intake, usage notes (e.g. "after meal"), remaining stock count, and an optional photo you attach to identify the medication.</p>
  </div>
  <div>
    <h3 class="font-medium mb-1">Medication logs</h3>
    <p class="opacity-80">A record of each scheduled dose — including whether it was taken, skipped, or missed — along with the scheduled date and time, and the actual time you marked it as taken.</p>
  </div>
  <div>
    <h3 class="font-medium mb-1">App preferences</h3>
    <p class="opacity-80">Settings such as language, display theme, font size, and notification preferences (e.g. whether to show the medication name in notifications).</p>
  </div>
</div>`,
      },
      {
        heading: "3. Device Permissions",
        content: `<p>The app may request the following permissions. Each permission is optional; declining it only disables the related feature.</p>
<div class="space-y-4">
  <div>
    <h3 class="font-medium mb-1">Notifications</h3>
    <p class="opacity-80">Used to send local reminders when a scheduled dose is due. All notifications are generated on-device; no notification passes through an external server.</p>
  </div>
  <div>
    <h3 class="font-medium mb-1">Camera &amp; Photo Library</h3>
    <p class="opacity-80">Used only if you choose to attach a photo to a medication. The photo is stored locally in the app's data directory and is never uploaded anywhere.</p>
  </div>
</div>`,
      },
      {
        heading: "4. Data Storage & Security",
        content: `<p>All data is persisted in your device's local storage using AsyncStorage. It is not synced to any cloud service by the app itself. If your device is protected by a PIN, biometrics, or encryption, that protection extends to the data stored by this app. We recommend keeping your device's OS up to date and lock screen enabled.</p>`,
      },
      {
        heading: "5. Data Sharing",
        content: `<p>We do not sell, share, or disclose your data to any third party. There are no advertising SDKs, analytics libraries, or crash reporting services embedded in the app that would transmit your information elsewhere.</p>`,
      },
      {
        heading: "6. Deleting Your Data",
        content: `<p>You can delete individual medications and their associated logs at any time from within the app. Uninstalling the app removes all locally stored data from your device permanently.</p>`,
      },
      {
        heading: "7. Children's Privacy",
        content: `<p>This app is not directed at children under the age of 13. We do not knowingly collect data from children. Because all data is stored locally and no account is created, there is no personal information we could collect from any user regardless of age.</p>`,
      },
      {
        heading: "8. Changes to This Policy",
        content: `<p>If we update this privacy policy, the new version will be published on this page with a revised effective date. We encourage you to review it periodically. Continued use of the app after changes are posted constitutes your acceptance of the updated policy.</p>`,
      },
      {
        heading: "9. Contact",
        content: `<p>If you have any questions or concerns about this privacy policy, please reach out at <a href="mailto:contact@40ambar.dev" class="underline underline-offset-2 hover:text-(--primary) transition-colors">contact@40ambar.dev</a>.</p>`,
      },
    ],
  },
};
