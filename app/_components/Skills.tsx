import { github, skillsData } from "../_data/skills";
import BubbleProps from "../_props/BubbleProps";
import { TbBrandGithubFilled } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen items-center pl-20 bg-black text-slate-300 py-20 pr-4"
    >
      <h3 className="text-md uppercase font-medium -mb-1">Technologies</h3>
      <h2 className="text-7xl uppercase font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:w-5/12 m-4 gap-8">
        <div className="col-span-2 text-black bg-slate-100 rounded-3xl">
          <BubbleProps
            title={skillsData[0].title}
            skills={skillsData[0].skills}
          />
        </div>
        <div className="">
          {" "}
          <BubbleProps
            title={skillsData[1].title}
            skills={skillsData[1].skills}
          />
        </div>
        <div className="flex items-center justify-center">
          <a
            href={github}
            target="_blank"
            className="flex justify-center items-center -space-x-3 group"
          >
            <div className="relative w-12 h-12 flex justify-center items-center rounded-full bg-black text-white outline group-hover:bg-white group-hover:text-black">
              <TbBrandGithubFilled size={30} color="" className="" />
            </div>
            <div className="relative w-12 h-12 flex justify-center items-center rounded-full bg-slate-200 text-black outline group-hover:bg-black group-hover:text-slate-200">
              <GoArrowUpRight size={30} className="" />
            </div>
          </a>
        </div>
        <div className="col-span-2">
          {" "}
          <BubbleProps
            title={skillsData[2].title}
            skills={skillsData[2].skills}
          />
        </div>
        <div className="flex items-center font-extralight text-gray-500">
          <div>
            Some of my{" "}
            <span className="text-slate-200 italic">
              favorite technologies, topics & tools
            </span>{" "}
            that I work with
          </div>
        </div>
        <div>
          {" "}
          <BubbleProps
            title={skillsData[3].title}
            skills={skillsData[3].skills}
          />
        </div>
      </div>
    </section>
  );
}
