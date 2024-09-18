"use client";

import { GitHub, LinkedIn, X } from "@mui/icons-material";
import { BsSend } from "react-icons/bs";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    document.getElementById("contact-form").reset();
    if (result.success) {
      console.log(result);
    }
  }
  return (
    <section
      id="contact"
      className="h-screen items-center bg-black flex flex-col md:flex-row text-slate-300 md:pl-32 py-20"
    >
      <div className="flex-[0.75] bg-neutral-800 p-8 rounded-2xl">
        <h3 className="text-md uppercase font-medium mb-3">
          Let's Get in Touch
        </h3>
        <h2 className="text-7xl uppercase font-bold mb-16">Contact</h2>

        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className=" flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="py-4 px-3 outline-none border-b-2 border-stone-400 font-medium bg-inherit text-stone-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="py-4 px-3 outline-none border-b-2 border-stone-400
             font-medium bg-inherit text-stone-300"
          />
          <textarea
            rows={4}
            name="message"
            placeholder="Share your thoughts"
            className="border-b-2 border-stone-400 py-4 px-3 outline-none font-medium bg-inherit text-stone-300 "
          />

          <button
            type="submit"
            className="flex bg-black justify-center 
            gap-3 sm:text-[20px] text-[16px] 
            font-bold items-center py-6
            whitespace-nowrap sm:w-[150px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] 
            hover:bg-slate-200 hover:text-slate-800 
            transition duration-[0.2s] ease-in-out"
          >
            Send
            <BsSend />
          </button>
        </form>
      </div>
      <div className="flex flex-[0.35] md:flex-col md:m-20 mt-10 gap-10 items-center">
        <a
          href="https://github.com/maheshc7/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 hover:w-20 hover:h-20"
        >
          <GitHub className="w-full h-full" />
        </a>
        <a
          href="https://www.linkedin.com/in/maheshc7/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 text-sky-600 hover:w-24 hover:h-24"
        >
          <LinkedIn className="w-full h-full" />
        </a>
        <a
          href="https://x.com/mahesh_c7/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 hover:w-20 hover:h-20"
        >
          <X className="w-full h-full" />
        </a>
      </div>
    </section>
  );
}
