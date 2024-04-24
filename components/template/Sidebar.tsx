"use client";
import { sideBarList } from "@/constant/sideList";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex flex-col h-screen w-fit justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[246px]">
      <div className="flex flex-col flex-1 gap-6">
        {sideBarList.map(({ url, title, icon }) => {
          const isActive = url === pathname || pathname.startsWith(url);
          return (
            <Link
              href={url}
              key={title}
              className={cn(
                "flex items-center justify-start gap-4 p-4 rounded-lg",
                { "bg-blue-1": isActive }
              )}
            >
              <Image src={icon} alt={title} width={24} height={24} />
              <p className="text-lg font-semibold max-lg:hidden">{title}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
