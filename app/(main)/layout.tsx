"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isExplorePage, setExplorePage] = useState<boolean>(true);

  const route = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    setExplorePage(pathName === "/explore");
  }, [pathName]);

  return (
    <html lang="en">
      <body>
        <div className="grid h-screen w-full pl-[56px]">
          <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-x border-[#404040] px-2 gap-1 "></aside>
          <div className="flex flex-col">
            {isExplorePage && (
              <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 bg-[#1e1e1e] px-4 border-[#404040] border-b"></header>
            )}
            <main className="overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
