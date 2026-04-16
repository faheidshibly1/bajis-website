import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bajis Awawdeh | Estate Planning Attorney",
  description:
    "Estate, business, and tax planning solutions from Bajis Awawdeh for individuals and families seeking clear legal structures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
