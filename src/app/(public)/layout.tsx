import { Footer, Navbar } from "@/components";
import React from "react";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#FCFCFC]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}