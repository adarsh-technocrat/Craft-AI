import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import ListTileView from "./list-title-view";

function CreateSideNavbar() {
  return (
    <aside className="inset-y fixed left-[86px]  z-20 flex h-full flex-col ite border-x border-[#404040] px-6 py-4 gap-4 ">
      <Button className="flex flex-row justify-center items-center gap-2 bg-[#303030]">
        <Plus size={20} />
        New Design
      </Button>
      <ListTileView
        title="Today"
        listOfDesigns={[
          {
            designId: "1",
            imageURL:
              "https://cdn.usegalileo.ai/feed-images/c0d9a5d9-2e9c-4346-a887-ede0cc72e073.webp",
            title: "Dog Shop Landing Page",
            viewMode: "Mobile",
          },
          {
            designId: "2",
            imageURL:
              "https://cdn.usegalileo.ai/feed-images/c0d9a5d9-2e9c-4346-a887-ede0cc72e073.webp",
            title: "Dog Shop Landing Page",
            viewMode: "Mobile",
          },
        ]}
      />
      <ListTileView
        title="Last 30 days"
        listOfDesigns={[
          {
            designId: "1",
            imageURL:
              "https://cdn.usegalileo.ai/feed-images/c0d9a5d9-2e9c-4346-a887-ede0cc72e073.webp",
            title: "Dog Shop Landing Page",
            viewMode: "Mobile",
          },
        ]}
      />
      <ListTileView
        title="Examples"
        listOfDesigns={[
          {
            designId: "1",
            imageURL:
              "https://cdn.usegalileo.ai/feed-images/c0d9a5d9-2e9c-4346-a887-ede0cc72e073.webp",
            title: "Resort Selection Screen",
            viewMode: "Mobile",
          },
          {
            designId: "2",
            imageURL:
              "https://cdn.usegalileo.ai/feed-images/c0d9a5d9-2e9c-4346-a887-ede0cc72e073.webp",
            title: "Japanese Ceramic Store Profile",
            viewMode: "Mobile",
          },
          {
            designId: "2",
            imageURL:
              "https://cdn.usegalileo.ai/feed-images/c0d9a5d9-2e9c-4346-a887-ede0cc72e073.webp",
            title: "San Francisco Coffee Shop Landing Page",
            viewMode: "Web",
          },
        ]}
      />
    </aside>
  );
}

export default CreateSideNavbar;
