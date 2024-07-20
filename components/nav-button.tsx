import { LucideIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface NavButtonProps {
  title: string;
  link: string;
  Icon: LucideIcon;
}

function NavButton({ link, title, Icon }: NavButtonProps) {
  const router = useRouter();
  return (
    <a
      href={link}
      className="flex flex-col justify-center items-center text-white group cursor-pointer"
    >
      <Button
        variant={"ghost"}
        className="group-hover:bg-[#303030] text-white group-hover:text-white"
      >
        <Icon />
      </Button>

      <h4 className="text-[12px] py-1">{title}</h4>
    </a>
  );
}

export default NavButton;
