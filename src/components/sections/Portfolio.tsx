import BracketButton from "../ui/BracketButton";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../data/portfolio";
import type { Project } from "../../types";
import { Link } from "react-router-dom";

const ProjectInfo = ({ project }: { project: Project }) => (
  <>
    <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-paper">
      <Link to={`/projects/${project.slug}`} className="pointer-events-auto">
        {project.title}
      </Link>
    </h3>
    <p className="max-w-md text-sm leading-relaxed text-line">
      {project.description}
    </p>

    {project.tags.length > 0 && (
      <ul className="flex flex-wrap justify-center gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/30 px-3 py-1 text-xs text-white"
          >
            {tag}
          </li>
        ))}
      </ul>
    )}

    <div className="pointer-events-auto relative z-10 flex flex-wrap items-center justify-center gap-4 pt-2">
      <BracketButton
        to={`/projects/${project.slug}`}
        ariaLabel={`See details about ${project.title}`}
      >
        See details
      </BracketButton>
      <BracketButton
        href={project.liveUrl}
        external
        ariaLabel={`Open ${project.title} live site (opens in a new tab)`}
      >
        Live
      </BracketButton>
      {project.repoUrl && (
        <BracketButton
          href={project.repoUrl}
          external
          ariaLabel={`View ${project.title} source code (opens in a new tab)`}
        >
          Code
        </BracketButton>
      )}
    </div>
  </>
);

const Portfolio = () => {
  return (
    <section id="projects">
      <div className="px-6 pb-12 pt-section md:px-12 lg:px-20">
        <SectionHeading title="Projects" />
        <p className="mx-auto mt-6 max-w-xl text-center text-md leading-relaxed text-ink/80">
          A few recently selected projects.
        </p>
      </div>

      <div className="bg-ink">
        <ul className="grid gap-px bg-black md:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.title}
              className="group relative overflow-hidden bg-ink"
            >
              <Link
                to={`/projects/${project.slug}`}
                tabIndex={-1}
                aria-hidden="true"
                className="block"
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width={1200}
                  height={750}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 lg:group-hover:scale-105"
                />
              </Link>

              {/* Desktop: details appear over the image on hover or keyboard focus */}
              <div className="pointer-event-none absolute inset-0 hidden flex-col items-center justify-center gap-4 bg-black/80 p-8 text-center text-white opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100 lg:flex">
                <ProjectInfo project={project} />
              </div>

              {/* Tablet and phone: details sit under the image, always visible */}
              <div className="flex flex-col items-center gap-3 p-6 text-center text-white lg:hidden">
                <ProjectInfo project={project} />
              </div>
            </li>
          ))}
        </ul>

        <p className="py-8 text-center text-xs font-bold uppercase tracking-[0.25em] text-paper">
          And many more to come!
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
