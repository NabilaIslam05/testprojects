"use client";
import NavBarCom from "@/components/features/navbar";
import "./globals.css";
import LoginPage from "./(auth)/login/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
  
        {children}</body>
    </html>
  );
}
