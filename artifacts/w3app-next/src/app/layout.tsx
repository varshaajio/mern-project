import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "W3AppDevelopers | Website Design & Development Company in Coimbatore",
  description:
    "W3AppDevelopers is a premium web development, app creation, digital marketing and SEO agency based in Coimbatore. We build websites that drive business growth.",
  keywords:
    "web development company coimbatore, website design coimbatore, digital marketing, SEO, app development, W3AppDevelopers",
  openGraph: {
    title: "W3AppDevelopers | Web Development & Digital Marketing",
    description:
      "Top-tier web design, development and digital marketing agency in Coimbatore. We build brands, not just websites.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/w3appdevelopers-logo.jpg" type="image/jpeg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
