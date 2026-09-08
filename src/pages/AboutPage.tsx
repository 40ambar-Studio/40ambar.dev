import { ExternalLink, Mail, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-20 space-y-4">
      {/* Heading */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-(--text)">
          About the Studio
        </h1>
      </div>

      {/* Mission */}
      <div className="rounded-xl p-6 sm:p-8 bg-(--bg-card) border border-(--border)">
        <p className="whitespace-pre-line text-(--text)">
          {`40ambar Studio is a group of people who enjoy developing software
          regardless of the discipline and, as a result, have developed a
          variety of software applications.

          The name "40ambar" is derived from a nautical term. The term "40ambar"
          is used for ships that carry a wide variety of goods. It was chosen to
          reflect the diversity within the studio.
          
          We believe that software should be free, and we salute everyone who works toward this goal.`}
        </p>
      </div>

      {/* Approach */}
      <h2 className="flex items-center gap-2 mt-8 text-lg font-semibold text-(--text)">
        <Shield size={20} className="text-(--primary)" />
        Approach
      </h2>
      <div className="rounded-xl p-6 sm:p-8 bg-(--bg-card) border border-(--border)">
        <p className="text-(--text)">
          The software developed under the 40ambar brand fundamentally embraces
          the Free and Open Source Software (FOSS) philosophy. It is designed to
          be easily usable by everyone, regardless of who the user is.
        </p>
      </div>

      {/* --------------------------------- Contact -------------------------------- */}
      <div className="mt-12 rounded-xl p-6 sm:p-8 bg-(--primary)/8 border border-(--primary)/25">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--primary)/15 text-(--primary)">
            <Mail size={24} />
          </div>
          <div className="flex-1">
            <p className="font-medium text-(--text)">Want to contact?</p>
          </div>
          <a
            href="mailto:contact@40ambar.dev"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white bg-(--primary) hover:bg-(--primary)/65"
          >
            Get in Touch
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
