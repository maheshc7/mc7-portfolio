import { intro, paragraphs } from "../_data/about";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen items-center pl-20 bg-cyan-950 text-white py-20"
    >
      <h3 className="text-md uppercase font-medium -mb-1 translate-x-4">
        Introduction
      </h3>
      <h2 className="text-7xl uppercase font-bold mb-10">About Me</h2>

      <p className="my-5 text-2xl max-w-lg font-semibold text-gray-600 text-justify">
        {intro}
      </p>
      <div className="max-w-3xl">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-500 mb-4 text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
