"use client";
import Image from "next/image";
import profile from "../assets/logo/profile.png";
import { first_name, last_name, main_title, titles } from "../_data/hero";
import Typewriter from "typewriter-effect";
export default function Hero() {
  return (
    <section id="hero" className="h-screen bg-zinc-900 ">
      {/* <div className="w-full h-12 bg-orange-400"></div> */}
      <div className="flex flex-col -mt-16 h-full items-center justify-center">
        <div className="inline-block text-4xl uppercase leading-normal text-white ">
          Hi, I'm <br />
          <span className="font-bold text-orange-300">{first_name}</span>{" "}
          {last_name}
        </div>
        <div className=" mt-4 text-2xl grid grid-cols-2 gap-3">
          <span className="font-semibold text-zinc-400 ">{main_title}</span>
          <div className="text-teal-800 ">
            <Typewriter
              options={{
                strings: titles,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="absolute z-10 grayscale w-[25lvh] md:w-[50lvh] bottom-6 -right-3">
          <Image src={profile} alt="" />
        </div>
        <div className="absolute blur grayscale w-[30lvh] md:w-[55lvh] bottom-3 -right-8">
          <Image src={profile} alt="" />
        </div>
      </div>
    </section>
  );
}
