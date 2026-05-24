import type { Metadata } from "next";
import localFont from "next/font/local";

import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { ProjectModal } from "@/components/ProjectCardList/components/ProjectModal/ProjectModal";
import { Backdrop } from "@/components/Backdrop/Backdrop";

import "./globals.scss";

export const metadata: Metadata = {
  title: "HYUNSOO KIM",
  description: "풀스택 개발자 김현수의 포트폴리오 입니다.",
  keywords: [
    "프론트엔드 개발자",
    "백엔드 개발자",
    "풀스택 개발자",
    "개발자 포트폴리오",
    "프론트엔드 포트폴리오",
    "백엔드 포트폴리오",
    "풀스택 포트폴리오",
    "김현수",
    "Hyunsoo Kim",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer"
  ],
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
