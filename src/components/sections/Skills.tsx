import type { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJs,
  FaGithub,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiFigma,
  SiPostgresql,
} from "react-icons/si";
import SectionHeading from "../ui/SectionHeading";
import { skillGroups } from "../../data/portfolio";
import type { SkillIcon } from "../../types";

const iconLookup: Record<SkillIcon, { Icon: IconType; color: string }> = {
  html: { Icon: FaHtml5, color: "#E34F26" },
  css: { Icon: FaCss3Alt, color: "#1572B6" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  javascript: { Icon: FaJs, color: "#F7DF1E" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  react: { Icon: FaReact, color: "#61DAFB" },
  nodejs: { Icon: FaNodeJs, color: "#5FA04E" },
  express: { Icon: SiExpress, color: "#000000" },
  git: { Icon: FaGitAlt, color: "#F05032" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  nextjs: { Icon: SiNextdotjs, color: "#000000" },
  figma: { Icon: SiFigma, color: "#F24E1E" },
  postgresql: { Icon: SiPostgresql, color: "#4169E1" },
  github: { Icon: FaGithub, color: "#181717" },
};

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-section md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-12">
        <SectionHeading title="Skills" />

        <div className="flex w-full flex-col gap-14">
          {skillGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-8">
              <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-black">
                {group.title}:
              </h3>

              <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
                {group.skills.map((skill) => {
                  const { Icon, color } = iconLookup[skill.icon];

                  return (
                    <li
                      key={skill.name}
                      className="flex flex-col items-center gap-3 text-center"
                    >
                      <Icon size={44} color={color} aria-hidden="true" />
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-black">
                        {skill.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
