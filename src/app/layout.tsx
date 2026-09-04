import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Joshua Uschock — Software, Systems & DevOps Engineer", template: "%s — Joshua Uschock" },
  description: "Senior software, systems, DevOps, and SRE engineer building resilient infrastructure and polished digital products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar /><main>{children}</main><Footer /></body></html>;
}
