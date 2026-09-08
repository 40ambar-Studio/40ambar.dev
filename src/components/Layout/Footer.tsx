import { Link } from "react-router";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="border-t border-t-(--border)">
      <div className="mx-auto max-w-5xl px-6 py-6 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 space-y-4 sm:space-y-0">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-lg tracking-tight font-logo hover:text-(--primary)"
            >
              40ambar
            </Link>
            <p className="text-xs text-(--text-secondary)">Developer Studio</p>
          </div>

          {/* Navigation */}
          <div className="sm:flex sm:justify-end ">
            <FooterLinks />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 text-center text-xs border-t border-t-(--border)">
          <p className="text-(--text-secondary)">
            &#127279; {new Date().getFullYear()}&nbsp;
            <Link
              to="https://www.gnu.org/licenses/copyleft.html"
              target="_blank"
              className="hover:text-(--primary)"
            >
              copyleft
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
