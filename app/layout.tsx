import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HAK Projects - Innovative IT Solutions",
  description: "HAK Projects delivers high-quality web development, mobile apps, ERP and cloud solutions to help your business grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}