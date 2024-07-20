// components/FeatureDesignCard.js
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

interface Author {
  authorName: string;
  authorImage?: string;
}

interface FeatureDesignCardProps {
  imageUrl: string;
  description: string;
  author: Author;
}

const FeatureDesignCard = ({
  imageUrl,
  description,
  author,
}: FeatureDesignCardProps) => (
  <Card className="border-none bg-transparent flex flex-col min-w-[200px]">
    <CardContent className="bg-[#dde3ee] rounded-tr-xl rounded-tl-xl w-full p-4 flex flex-col justify-center items-center">
      <img src={imageUrl} alt="" />
    </CardContent>
    <CardDescription className="text-[#fafafa] bg-[#262626] p-4 text-ellipsis">
      {description}
    </CardDescription>
    <CardFooter className="bg-[#262626] rounded-br-xl rounded-bl-xl flex flex-row items-center justify-start gap-3">
      <Avatar></Avatar>
      <p className="text-[#b0b0b0] text-sm">{author.authorName}</p>
    </CardFooter>
  </Card>
);

export default FeatureDesignCard;
