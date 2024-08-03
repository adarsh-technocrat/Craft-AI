import React from "react";
import { Card } from "./ui/card";
import FeatureDesignCard from "./feature-design-card";

interface GeneratedDesigns {
  imageURL: string;
  title: string;
  viewMode: string;
  designId: string;
}

interface ListTileViewProps {
  title: string;
  listOfDesigns: GeneratedDesigns[];
}

function ListTileView({ title, listOfDesigns }: ListTileViewProps) {
  return (
    <div>
      <h4 className="text-[#b0b0b0] font-medium text-sm ">{title}</h4>
      <div className="py-2 flex flex-col gap-2">
        {listOfDesigns.map((designInfo, index) => (
          <ListTileView.Card key={index} {...designInfo} />
        ))}
      </div>
    </div>
  );
}

ListTileView.Card = (designInfo: GeneratedDesigns) => {
  return (
    <Card className="flex cursor-pointer hover:bg-[#303030] bg-[#1e1e1e] border-none flex-row justify-center items-center p-2 gap-3 max-w-[250px]">
      <div className="rounded-lg h-12 w-12 bg-[#efe5dc] overflow-hidden">
        <img src={designInfo.imageURL} className="p-2" />
      </div>
      <div className="flex flex-col items-start justify-start gap-1">
        <h6 className="text-white text-xs text-wrap text-ellipsis w-[150px]">
          {designInfo.title}
        </h6>
        <h6 className="text-[#b0b0b0] text-xs">{designInfo.viewMode}</h6>
      </div>
    </Card>
  );
};

export default ListTileView;
