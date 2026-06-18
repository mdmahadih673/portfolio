import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Mahadi Hasan | Full Stack Web Developer",
  description:
    "Portfolio of Md. Mahadi Hasan, a Full Stack Web Developer specializing in MERN Stack, React, Next.js, and modern AI-assisted development.",
  keywords: [
    "Md. Mahadi Hasan",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Md. Mahadi Hasan", url: "mailto:mdmahadih673@gmail.com" }],
  creator: "Md. Mahadi Hasan",
  openGraph: {
    title: "Md. Mahadi Hasan | Full Stack Web Developer",
    description:
      "Building modern, scalable, and user-friendly web experiences with MERN Stack and AI-assisted development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Mahadi Hasan | Full Stack Web Developer",
    description:
      "Building modern, scalable, and user-friendly web experiences.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#07080d] text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
