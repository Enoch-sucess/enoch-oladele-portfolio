import { useEffect, type ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import BracketButton from "../components/ui/BracketButton";
import { projects } from "../data/portfolio";

const DEFAULT_TITLE = "Enoch Oladele | Full Stack Web Developer";

const DetailSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="flex flex-col gap-4">
    <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-black">
      {title}
    </h2>
    {children}
  </section>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) return;

    document.title = `${project.title} | Enoch Oladele`;

    // Restore the default title when leaving the details page.
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [project]);

  if (!project) return <Navigate to="/" replace />;

  const { details } = project;

  return (
    <article className="px-6 pb-section pt-32 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        <Link
          to="/#projects"
          className="w-fit text-xs font-bold tracking-[0.2em] uppercase text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
        >
          Back to projects
        </Link>

        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>

        <img
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={750}
          decoding="async"
          className="aspect-[16/10] w-full rounded-xl border-line object-cover object-top"
        />

        <p className="text-base leading-relaxed text-muted">
          {details.overview}
        </p>

        {details.role && (
          <DetailSection title="My role">
            <p className="leading-relaxed text-muted">{details.role}</p>
          </DetailSection>
        )}

        {project.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-black/30 px-3 py-1 text-xs text-black"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-4 text-black">
          <BracketButton
            href={project.liveUrl}
            external
            ariaLabel={`Open ${project.title} live site (opens in a new tab)`}
          >
            Live site
          </BracketButton>
          {project.repoUrl && (
            <BracketButton
              href={project.repoUrl}
              external
              ariaLabel={`view ${project.title} source code (opens in a new tab)`}
            >
              Source code
            </BracketButton>
          )}
        </div>

        {details.features.length > 0 && (
          <DetailSection title="Features">
            <ul className="list-disc space-y-2 pl-5 text-muted">
              {details.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </DetailSection>
        )}

        {details.challenges.length > 0 && (
          <DetailSection title="Challenges">
            <ul className="flex flex-col gap-6">
              {details.challenges.map((c) => (
                <li key={c.problem} className="flex flex-col gap-1">
                  <p className="font-semibold text-black">{c.problem}</p>
                  {c.solution && <p className="text-muted">{c.solution}</p>}
                </li>
              ))}
            </ul>
          </DetailSection>
        )}

        {details.lessons.length > 0 && (
          <DetailSection title="What I Learned">
            <ul className="list-disc space-y-2 pl-5 text-muted">
              {details.lessons.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ul>
          </DetailSection>
        )}
      </div>
    </article>
  );
};

export default ProjectDetail;
