import Hero from "./_components/Hero";
import About from "./_components/About";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import Experience from "./_components/Experience";
import Contact from "./_components/Contact";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
      {/* <a href="https://www.vecteezy.com/free-vector/mc-logo">
        Mc Logo Vectors by Vecteezy
      </a> */}
    </main>
  );
}
