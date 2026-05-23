import type { Metadata } from "next";
import localFont from "next/font/local";

import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { ProjectModal } from "@/components/ProjectCardList/components/ProjectModal/ProjectModal";
import { Backdrop } from "@/components/Backdrop/Backdrop";

import "./globals.scss";

export const metadata: Metadata = {
  title: "HYUNSOO KIM",
  description: "Fullstack developer portfolio.",
  keywords: ["풀스택 개발자", "개발자 포트폴리오", "김현수", "Next.js 포트폴리오", "React", "Fullstack Developer"],
  robots: { index: true, follow: true },
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
      <body>
        <Header />
        <Sidebar />
        <ProjectModal />
        <Backdrop />
        {children}
      </body>
    </html>
  );
}
