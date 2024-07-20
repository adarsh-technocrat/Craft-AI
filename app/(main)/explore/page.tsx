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
      <div className="w-full py-[22px] flex flex-col gap-11 items-center">
        <ExploreSearchHeader />
        <div className="bg-[#262626] placeholder:text-[#262626] w-[520px] max-w-full flex flex-row rounded-lg border p-2 border-[#404040]">
          <Input
            className="bg-transparent ring-0 focus:ring-0 outline-none border-none"
            placeholder="Describe your design"
          />
          <Button className="bg-[#9c75ff] hover:bg-[#9c75ff] text-[12px] py-0 px-3">
            Generate
          </Button>
        </div>
      </div>

      <div className="py-[24px]">
        <Tabs defaultValue="fetured" className="w-full ">
          <TabsList className="bg-transparent mb-4 ">
            <TabsTrigger value="fetured">Fetured</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
          </TabsList>
          <TabsContent value="fetured" className="columns-4 gap-4">
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
