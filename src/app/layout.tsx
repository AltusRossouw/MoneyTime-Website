import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MoneyTime: Spending Tracker - Budget Planner & Money Manager",
  description: "See what's safe-to-spend today, track expenses in seconds, set a budget, and reach your savings goals faster with MoneyTime — your all-in-one budget app & money manager.",
  keywords: "budget tracker, expense tracker, money manager, personal finance, savings goals, spending tracker",
  authors: [{ name: "Boris Borisov" }],
  openGraph: {
    title: "MoneyTime: Spending Tracker",
    description: "Your all-in-one budget app & money manager",
    type: "website",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <script
          defer
          src="https://umami.intellixlabs.co.za/script.js"
          data-website-id="8360cb03-b7f8-4c23-85fc-bc7456a8ac3a"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
