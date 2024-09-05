import React from "react";

interface BubbleProp {
  title: string;
  skills: string[];
}

const BubbleProps: React.FC<BubbleProp> = ({ title, skills }) => {
  return (
    <div className="col-span-2 p-5 outline outline-slate-500 rounded-3xl leading-7">
      <div className=" text-lg mb-3">{title}</div>
      <div className="text-sm font-extralight tracking-widest">
        {skills.join(" / ")}
      </div>
    </div>
  );
};

export default BubbleProps;
