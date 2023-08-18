import React, { useState, useEffect } from "react";
import ProjectItem from "@/components/ProjectItem";
import projectsData from "@/data/projectsData";


const Projects = () => {
  const [open, setOpen] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    if(open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }

  return (
    <div className="bg-white dark:bg-slate-950 text-black dark:text-white py-4 px-2 md:pb-6 md:px-10 mx-auto" id="projects" >
          <h2 className="text-center text-4xl mb-6">Projects</h2>
          <div className="h-auto grid place-items-center">
            <div className="px-4 md:px-8 max-w-5xl">
            {projectsData.map((project, index) => (
              <ProjectItem 
              index={index}
              key={index}
              open={open === index}
              toggle={() => handleToggle(index)}
              title={project.title}
              workPlace={project.workPlace}
              technology={project.technology}
              secondaryTechnology={project.secondaryTechnology}
              description={project.description}/>
              ))}
            </div>
          </div>
    </div>
  );
};
 
export default Projects;