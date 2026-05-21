import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.scss";

export const metadata: Metadata = {
  title: "HYUNSOO KIM",
  description: "Fullstack developer portfolio.",
};

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.ttf",
  variable: "--font-pretendard",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  );
}
