import ExploreSearchHeader from "@/components/explore-search-header";
import FeatureDesignCard from "@/components/feature-design-card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";

function ExplorePage() {
  return (
    <div className="text-[#fafafa]">
      <div className="w-full flex flex-col gap-3 items-center">
        <ExploreSearchHeader />
        <div className="bg-[#262626] placeholder:text-[#262626] flex flex-row">
          <Input
            className="bg-transparent ring-0 focus:ring-0 outline-none border-none focus-visible:ring-0"
            placeholder="Describe your design"
          />
          <Button className="bg-[#9c75ff] hover:bg-[#9c75ff]">Generate</Button>
        </div>
      </div>

      <div className="div">
        <Tabs defaultValue="fetured" className="w-full ">
          <TabsList className="bg-transparent ">
            <TabsTrigger value="fetured">Fetured</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
          </TabsList>
          <TabsContent value="fetured" className="flex flex-row  gap-3">
            <FeatureDesignCard
              author={{ authorName: "Adarsh Kumar Singh" }}
              description="Website for an online shop selling camping goods: Design a
                listings page for an online shop that specializes in camping
                goods such as canned food."
              imageUrl="https://cdn.usegalileo.ai/feed-images/c0d9a5d9-2e9c-4346-a887-ede0cc72e073.webp"
            />
            <FeatureDesignCard
              author={{ authorName: "Adarsh Kumar Singh" }}
              description="Website for an online shop selling camping goods: Design a
                listings page for an online shop that specializes in camping
                goods such as canned food."
              imageUrl="https://cdn.usegalileo.ai/feed-images/c0d9a5d9-2e9c-4346-a887-ede0cc72e073.webp"
            />
            <FeatureDesignCard
              author={{ authorName: "Adarsh Kumar Singh" }}
              description="Website for an online shop selling camping goods: Design a
                listings page for an online shop that specializes in camping
                goods such as canned food."
              imageUrl="https://cdn.usegalileo.ai/feed-images/c0d9a5d9-2e9c-4346-a887-ede0cc72e073.webp"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default ExplorePage;
