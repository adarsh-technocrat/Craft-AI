"use client";

import CreateSideNavbar from "@/components/create-side-side-navbar";
import ImageToUISideNavbar from "@/components/Image-to-ui-side-navbar";
import NavButton from "@/components/nav-button";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Telescope, Image, ClipboardPenLine, Coins } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body>
        <div className="grid h-screen w-full">
          <>
            <aside className=" bg-[#1e1e1e] inset-y fixed  left-0 z-20 flex h-full flex-col border-x border-[#404040] px-2 py-2 gap-4 ">
              <NavButton Icon={Telescope} link="/explore" title="Explore" />
              <NavButton
                Icon={ClipboardPenLine}
                link="/create"
                title="text-to-UI"
              />
              <NavButton Icon={Image} link="/image-to-ui" title="Image-to-UI" />
              <nav className="mt-auto grid gap-1 p-2">
                <div className="flex flex-col justify-center items-center gap-4">
                  <Avatar className="bg-white" />
                  <div className="flex flex-row justify-center items-center gap-1">
                    <Coins size={12} className="text-gray-200" />
                    <text className="text-gray-200 text-sm">200</text>
                  </div>
                </div>
              </nav>
            </aside>
            {pathName === "/create" && <CreateSideNavbar />}
            {pathName === "/image-to-ui" && <ImageToUISideNavbar />}
          </>

          <div className="flex flex-col">
            {pathName === "/explore" && (
              <header className="sticky top-0 z-10 flex flex-row-reverse h-[57px] items-center gap-1 bg-[#1e1e1e] px-4 border-[#404040] border-b">
                <Button
                  className="hover:bg-[#303030] text-white hover:text-white "
                  variant={"ghost"}
                >
                  Pricing
                </Button>
                <Button
                  variant={"ghost"}
                  className="hover:bg-[#303030] text-white hover:text-white "
                >
                  Blog
                </Button>
              </header>
            )}
            <main className="overflow-hidden md:grid-cols-2 lg:grid-cols-3">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
