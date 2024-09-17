"use client";
import Image from "next/image";
import profile from "../assets/logo/profile.png";
import { first_name, last_name, main_title, titles } from "../_data/hero";
import Typewriter from "typewriter-effect";
export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-tl from-neutral-800 to-zinc-100 via-zinc-500"
    >
      {/* <div className="w-full h-12 bg-orange-400"></div> */}
      <div className="relative flex flex-col justify-center items-center h-screen mx-auto">
        {/* Name & title box */}
        <div
          className="absolute -mt-48 px-6 md:px-24 flex-row items-start
          justify-between gap-3"
        >
          <div className=" text-3xl lg:text-4xl uppercase leading-normal text-white ">
            Hi, I'm <br />
            <span className="font-bold text-orange-400/80">
              {first_name}
            </span>{" "}
            {last_name}
          </div>
          <div className=" mt-4 text-xl lg:text-2xl grid grid-cols-2 gap-3">
            <span className="font-semibold text-stone-800 ">{main_title}</span>
            <div className="text-teal-800">
              <Typewriter
                options={{
                  strings: titles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        <div className="">
          <Image
            className="absolute z-10 grayscale w-[25lvh] md:w-[40lvh] xl:w-[50lvh] bottom-2 right-2"
            src={profile}
            alt=""
          />
          <Image
            className="absolute blur grayscale w-[30lvh] md:w-[45lvh] xl:w-[55lvh] bottom-0 -right-4"
            src={profile}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
