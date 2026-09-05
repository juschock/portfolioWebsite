import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./lab-experiences.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joshuauschock.com"),
  title: { default: "Joshua Uschock — Product, Software & Systems Engineer", template: "%s — Joshua Uschock" },
  description: "U.S.-based engineer pairing sharp interfaces with dependable software, cloud, DevOps, and SRE engineering.",
  authors: [{ name: "Joshua Uschock" }],
  creator: "Joshua Uschock",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Joshua Uschock",
    title: "Joshua Uschock — Product, Software & Systems Engineer",
    description: "Sharp interfaces and dependable engineering—from media-rich websites to cloud platforms and production systems.",
    url: "https://www.joshuauschock.com",
  },
  twitter: {
    card: "summary",
    title: "Joshua Uschock — Product, Software & Systems Engineer",
    description: "Sharp interfaces and dependable engineering—from media-rich websites to cloud platforms and production systems.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#07111f", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar /><main>{children}</main><Footer /></body></html>;
}
