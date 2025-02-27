import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn Next.js",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <p>hello world</p>
        </div>
        {children}
      </body>
    </html>
  );
}
