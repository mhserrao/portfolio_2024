import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cat, catHover } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  tags,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
    >
      <div
        className="absolute top-0 left-0 z-10
      h-full w-full opacity-[0.5] rounded-[24px]"
      ></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-white tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20"
          >
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(31,31,31,0.5)] rounded-b-[24px] z-20"
          >
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(repo, "_blank")}
                className="hover:bg-onyx bg-richBlack transition sm:w-11 sm:h-11 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <FaGithub className="w-[20px] h-[20px]" />
              </div>
            </div>

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-white uppercase font-beckman sm:mt-0 -mt-[1rem]"
            >
              {name}
            </h2>
            <p
              className="text-white sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-openSans tracking-[1px]"
            >
              {description}
            </p>
            <button
              className="live-demo flex items-center justify-center 
  sm:text-[15px] text-[13px] text-white
  font-semibold font-beckman py-[0.9rem] px-[1rem]
  gap-2 sm:w-[138px] sm:h-[48px] w-[125px] h-[44px] 
  rounded-[10px] glassmorphism sm:mt-[22px] mt-[16px] 
 hover:bg-onyx hover:text-white
  transition duration-200 ease-in-out"
              onClick={(e) => {
                e.stopPropagation(); // prevent triggering card flip or selection
                window.open(demo, "_blank", "noopener,noreferrer");
              }}
            >
              DEMO
              <GoLinkExternal className="sm:w-[26px] sm:h-[26px] w-[22px] h-[22px]" />
            </button>
            <div className="flex flex-wrap gap-2 mt-3">
              {tags?.map((tag, i) => {
                const Icon = tag.icon;
                return (
                  <span
                    key={i}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-white`}
                  >
                    <Icon className="text-sm text-white" />
                    {tag.name}
                  </span>
                );
              })}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState("project-2");

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
