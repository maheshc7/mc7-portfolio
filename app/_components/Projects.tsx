import { projects } from "../_data/projects";
import { FolderCard } from "../_props/CardProps";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen items-center bg-slate-100 pl-5 lg:pl-20 py-20"
    >
      <h3 className="text-md uppercase font-medium -mb-1">
        Check out my works
      </h3>
      <h2 className="text-7xl uppercase font-bold mb-32">Projects</h2>

      <div className="flex flex-wrap justify-evenly gap-8">
        {projects.map((project, index) => (
          <FolderCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            year={project.year}
          />
        ))}
      </div>
    </section>
  );
}
