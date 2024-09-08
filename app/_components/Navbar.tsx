import Image from "next/image";
import mcLogo from "../assets/logo/mc-logo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 flex mx-auto md:w-4/5 rounded-3xl  bg-gray-950/95 text-white text-md gap-8 justify-evenly items-center shadow-sm shadow-gray-900 ">
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#" className=" px-6 p-4 rounded-2xl">
        <Image src={mcLogo} alt="MC" width={22} height={20} />
      </a>
      <a href="#experience">Experience</a>
      <a href="#contact" className="">
        Contact
      </a>
    </nav>
  );
}
