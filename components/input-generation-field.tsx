import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface InputeGenerationFieldProps {
  className?: string;
}

function InputeGenerationField({ className }: InputeGenerationFieldProps) {
  return (
    <div
      className={cn(
        className,
        "bg-[#262626] placeholder:text-[#262626] w-[520px] max-w-full flex flex-row rounded-lg border p-2 border-[#404040]"
      )}
    >
      <Input
        className="bg-transparent ring-0 focus:ring-0 outline-none border-none"
        placeholder="Describe your design"
      />
      <Button className="bg-[#9c75ff] hover:bg-[#9c75ff] text-[12px] py-0 px-3">
        Generate
      </Button>
    </div>
  );
}

export default InputeGenerationField;
