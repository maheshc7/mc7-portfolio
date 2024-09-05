import React from "react";

interface CardProps {
  title: string;
  description: string;
  technologies: string[];
  year: number;
}

export const FolderCard: React.FC<CardProps> = ({
  title,
  description,
  technologies,
  year,
}) => {
  return (
    <div>
      <div className="flex justify-end">
        <div className=" bg-blue-300 w-[30%] h-8 rounded-t-lg  p-2 text-emerald-950  text-center">
          {year}
        </div>
        <div className="w-[70%] h-8 rounded-bl-lg flex flex-row">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="m-0.5 mb-1 p-1 rounded-lg bg-slate-600  text-slate-100 text-center text-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-64 h-40 bg-blue-300 rounded-tr-lg rounded-b-lg shadow-lg overflow-hidden group">
        <div className="absolute bottom-0 left-0 right-0 flex flex-col flex-wrap justify-end p-4 bg-yellow-300/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-sm font-medium">{description}</div>
        </div>
      </div>
      <div className="justify-end pt-4 rounded-b-md">
        <div className="text-lg font-semibold">{title}</div>
      </div>
    </div>
  );
};
