"use client";
import { first_name, last_name, main_title, titles } from "../_data/hero";
import Typewriter from "typewriter-effect";
export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center"
    >
      <div className="inline-block text-4xl uppercase ">
        Hi, I'm <br />
        {first_name} {last_name}
      </div>
      <div className="lg:translate-x-24 mt-4 text-2xl grid md: grid-cols-2 lg:grid-cols-3 gap-3">
        <span className="font-semibold ">{main_title}</span>
        <div className="text-teal-800 lg:col-span-2">
          <Typewriter
            options={{
              strings: titles,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </section>
  );
}
