// app/layout.tsx
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/ui/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Palak Gupta — Portfolio",
  description: "Math–CS @ UC San Diego · Data & AI · Analytics Portfolio",
};

// Keep it simple: name + link (icons optional)
const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Resume", link: "#resume" },
  { name: "Contact", link: "#contact" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-screen bg-black font-sans antialiased", fontSans.variable)}>
        {/* Sticky header (replaces FloatingNav) */}
      

        {/* Push content below the sticky header */}
        <main className="pt-2">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
