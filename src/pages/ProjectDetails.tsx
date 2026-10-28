import { useEffect, type ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import BracketButton from "../components/ui/BracketButton";
import { projects } from "../data/portfolio";

const SITE_URL = "https://enoch-oladele-portfolio.vercel.app";

const DEFAULT_TITLE = "Enoch Oladele | Full Stack Web Developer";

const DEFAULT_DESCRIPTION =
  "Enoch Oladele is a full-stack web developer building applications with React, TypeScript, Node.js, Express and MongoDB. View projects and get in touch.";

const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/dzezte7kv/image/upload/c_pad,w_1200,h_630,b_rgb:d7d7d7/f_jpg/q_auto/Vector_Portrait_in_Navy_Suit.png";

const setMeta = (
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
};

const setCanonical = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = href;
};

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

    const title = `${project.title} | Enoch Oladele`;
    const description = project.description;
    const url = `${SITE_URL}/projects/${project.slug}`;

    document.title = title;

    setMeta("name", "description", description);
    setCanonical(url);

    setMeta("property", "og:type", "article");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", project.image);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", project.image);

    return () => {
      document.title = DEFAULT_TITLE;

      setMeta("name", "description", DEFAULT_DESCRIPTION);
      setCanonical(`${SITE_URL}/`);

      setMeta("property", "og:type", "website");
      setMeta("property", "og:title", "Enoch | Full Stack Web Developer");
      setMeta(
        "property",
        "og:description",
        "Full-stack web developer building applications with React, TypeScript, Node.js, Express and MongoDB.",
      );
      setMeta("property", "og:url", `${SITE_URL}/`);
      setMeta("property", "og:image", DEFAULT_OG_IMAGE);

      setMeta("name", "twitter:card", "summary_large_image");
      setMeta("name", "twitter:title", "Enoch | Full Stack Web Developer");
      setMeta("name", "twitter:description", DEFAULT_DESCRIPTION);
      setMeta("name", "twitter:image", DEFAULT_OG_IMAGE);
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
