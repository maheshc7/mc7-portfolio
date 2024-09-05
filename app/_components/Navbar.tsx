import Image from "next/image";
import mcLogo from "../assets/logo/mc-logo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex mx-auto px-4 bg-gray-800/80 text-white text-lg gap-8 justify-center items-center shadow-sm shadow-gray-900 ">
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#" className=" px-6 p-4 bg-black rounded-2xl">
        <Image src={mcLogo} alt="MC" width={22} height={20} />
      </a>
      <a href="#experience">Experience</a>
      <a href="#contact" className="">
        Contact
      </a>
    </nav>
  );
}
