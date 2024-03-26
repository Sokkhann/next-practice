import React from "react";
import "../globals.css";
import SidebarComponent from "@/components/sidebar/SideBarComponent";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <aside className="fixed h-screen">
          <SidebarComponent />
        </aside>
        <main>{children}</main>
      </body>
    </html>
  );
}