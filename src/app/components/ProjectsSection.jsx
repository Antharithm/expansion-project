"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "The Psychedelic Shindig",
    description: "Come explore the rabbit hole of funk",
    image: "/images/projects/psyshindig.png",
    tag: ["All", "Live"],
    gitUrl: "https://youtu.be/OX4BN2sJ9mo",
  },
  {
    id: 2,
    title: "Live at Wissahickon Brewery",
    description: "Golden >>> Ghostbusters Theme Song",
    image: "/images/projects/wissahiconBrew.png",
    tag: ["All", "Live"],
    gitUrl: "https://youtu.be/n-8jbdDxo4o",
  },
  {
    id: 3,
    title: "Emagination (Official Music Video)",
    description:
      "Inspired by the film 'Willy Wonka & the Chocolate Factory (1971)'",
    image: "/images/projects/emaginationThumbnail.png",
    tag: ["All", "Studio"],
    gitUrl: "https://youtu.be/Mflab1MxKaI",
  },
  {
    id: 4,
    title: "Lincoln Boulevard (Official Music Video)",
    description:
      "Official music video for Lincoln Boulevard by: Expansion Project ",
    image: "/images/projects/linkBThumbnail.png",
    tag: ["All", "Studio"],
    gitUrl: "https://youtu.be/CADFoemU5Jo",
  },
  {
    id: 5,
    title: "Royal Chords",
    description: "'Royal' Live from our 2018 album: Conscious Tortoise",
    image: "/images/projects/royalChordsThumbnail.png",
    tag: ["All", "Live"],
    gitUrl: "https://youtu.be/dWAWSzwb4rA",
  },
  {
    id: 6,
    title: "Live Recap",
    description: "Pub Webb Live Recap Video",
    image: "/images/projects/liveRecap.png",
    tag: ["All", "Live", "Recap"],
    gitUrl: "https://youtu.be/Um_VF3GP_mQ",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="music">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Music
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Studio"
          isSelected={tag === "Studio"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Live"
          isSelected={tag === "Live"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;