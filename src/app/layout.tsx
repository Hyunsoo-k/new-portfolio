import type { Metadata } from "next";
import localFont from "next/font/local";

import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { ProjectModal } from "@/components/ProjectModal/ProjectModal";
import { Backdrop } from "@/components/Backdrop/Backdrop";

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
