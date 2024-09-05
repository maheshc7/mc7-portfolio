"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../_data/experiences";
import Image, { StaticImageData } from "next/image";

interface Experience {
  date: string;
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <VerticalTimelineElement
    className=""
    visible={true}
    contentStyle={{
      background: "#eaeaec",
      color: "#292929",
      boxShadow:
        "rgba(0, 0, 0, 0.2) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      borderRadius: "12px",
    }}
    contentArrowStyle={{
      borderRight: "7px solid  #232631",
    }}
    date={
      <div>
        <h3 className="uppercase text-md font-bold ">{experience.date}</h3>
      </div>
    }
    iconStyle={{
      background: experience.iconBg,
      // boxShadow:
      //   "0 0 0 4px #4e19a4d2, inset 0 2px 0 rgb(95, 209, 24), 0 2px 12px 3px rgba(213, 210, 10, 0.755)",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image
          className="rounded-full object-fill"
          src={experience.icon}
          width={55}
          height={55}
          alt={experience.company_name}
        />
      </div>
    }
  >
    <div>
      <h3 className=" text-xl font-semibold tracking-[2px]">
        {experience.title}
      </h3>
      <h4 className="text-lg tracking-[1px]">{experience.company_name}</h4>
    </div>
  </VerticalTimelineElement>
);

export default function Experience() {
  return (
    <section id="experience" className="items-center bg-slate-300 pl-20 py-20">
      <h3 className="text-md uppercase font-medium -mb-1">
        What I've done so far
      </h3>
      <h2 className="text-7xl uppercase font-bold mb-32">Experience</h2>

      <VerticalTimeline className="vertical-timeline-custom-line ">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
