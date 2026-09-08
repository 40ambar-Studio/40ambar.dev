import type React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
