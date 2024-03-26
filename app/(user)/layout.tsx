import { Suspense } from "react";
import "../globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";

import { inter, suwannaphum, localCustomFont } from "./font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${suwannaphum.variable} ${inter.variable} ${localCustomFont.variable} h-screen flex flex-col`}>
        <header>
          <NavbarComponent />
        </header>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}