import type { Metadata } from "next";
import "@/app/globals.css";
import { fonts } from "@/assets/fonts/_index";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Providers from "@/providers/_index";
import { AppSidebar } from "@/components/ui/app-sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", fonts.join(" "))}>
        <Providers>
          <AppSidebar />
          <div className="w-full h-screen flex flex-col">
            <SidebarTrigger className="fixed ml-3 mt-3 z-20" />
            {children}
          </div>
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
