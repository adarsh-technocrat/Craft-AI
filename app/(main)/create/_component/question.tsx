import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import React from "react";

interface QuestionProps {
  avatarUrl?: string;
  name: string;
  text: string;
}

function Question({ text, avatarUrl, name }: QuestionProps) {
  return (
    <Card className="my-4 p-2 bg-transparent border-none flex flex-row justify-start items-start gap-3">
      <Avatar>
        <AvatarImage alt="" src={avatarUrl} />
      </Avatar>
      <div className="flex flex-col gap-1 text-white prose-h1:text-[16px] prose-p:text-[14px] prose-h1:font-semibold">
        <h1>{name}</h1>
        <p>{text}</p>
      </div>
    </Card>
  );
}

export default Question;
