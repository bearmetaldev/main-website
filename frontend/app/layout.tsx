import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bear Metal Development - Expert Software Engineering Solutions",
  description:
    "Elevating software performance with expert engineering in Web3, RTOS, computer vision, and more. Contact us for cutting-edge solutions.",
  keywords:
    "software engineering, Web3, RTOS, computer vision, IoT, distributed systems",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="night"
      className={`${inter.className} ${lexend.className} overflow-hidden`}
    >
      <body className="overflow-hidden">{children}</body>
    </html>
  );
}
