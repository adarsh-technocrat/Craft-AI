"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Monitor, Smartphone } from "lucide-react";
import React, { useState } from "react";

const prompts: Record<string, string[]> = {
  mobile: [
    "Product page for purchasing items from Animal Crossing, with game-inspired content.",
    "Results page in a music app for viewing artist and album listings.",
  ],
  web: [
    "A user interface that allows restaurants to edit the content of menu items appearing on their website for ordering.",
    "A leaderboard page for the best football teams for the Superbowl 2022.",
  ],
};

function InitialConversation() {
  const [viewMode, setViewMode] = useState<string>("mobile");

  return (
    <div className="max-w-[640px] w-full flex flex-col items-center justify-center gap-8 rounded-xl pr-11">
      <h4 className="text-xl text-white">New Design</h4>
      <Card className="w-full bg-[#1e1e1e] px-4 border-whitec border-opacity-10">
        <Textarea
          className="outline-none text-white py-4 max-h-[192px] bg-transparent border-none resize-none"
          placeholder="Enter your text here..."
        ></Textarea>

        <div className="flex flex-row justify-between items-center mt-4">
          <Tabs
            defaultValue="mobile"
            onValueChange={(value) => setViewMode(value)}
            className="w-full"
          >
            <TabsList className="bg-[#303030] mb-4">
              <TabsTrigger
                value="mobile"
                className="flex flex-row gap-2 data-[state=active]:bg-[#1e1e1e]"
              >
                <Smartphone
                  size={16}
                  color={viewMode === "mobile" ? "#9c75ff" : "#ffffff"}
                />
                Mobile
              </TabsTrigger>
              <TabsTrigger
                value="web"
                className="flex flex-row gap-2 data-[state=active]:bg-[#1e1e1e]"
              >
                <Monitor
                  size={16}
                  color={viewMode === "web" ? "#9c75ff" : "#ffffff"}
                />
                Web
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button className="bg-[#9c75ff] hover:bg-[#9c75ff] text-[12px] py-0 px-3">
            Generate
          </Button>
        </div>
      </Card>
      <div className="flex flex-col justify-start items-start gap-5 w-full">
        <span className="text-sm text-[#aaaaaa]">Try these prompts</span>
        <div className="flex flex-col gap-2 justify-start items-start">
          {prompts[viewMode].map((prompt, index) => (
            <Button
              key={index}
              variant="outline"
              className="max-w-[568px] text-wrap text-[#aaaaaa] hover:text-[#aaaaaa] font-light text-xs text-start py-[22px] bg-[#262626] border-[#aaaaaa] hover:bg-[#1e1e1e] border-opacity-15"
            >
              {prompt}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InitialConversation;
