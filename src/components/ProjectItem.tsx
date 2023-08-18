
import React from "react";
import { Collapse } from "react-collapse"
import {AiOutlineMinus} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"

interface ProjectItemProps {
  index: number; // Add index prop to ProjectItemProps
  open: boolean,
  toggle: (index: number) => void,
  title: string;
  workPlace: string;
  technology: string;
  secondaryTechnology: string;
  description: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  index,
  open,
  toggle,
  title,
  workPlace,
  technology,
  secondaryTechnology,
  description,
}) => {

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    toggle(index); // Call the toggle function without arguments
  };


  return (
    <div className="pt-[10px] mb-4">
      <div className={`bg-slate-200 py-[16px] px-[24px] flex justify-between items-center cursor-pointer ${open ? "" : ""}`} onClick={handleClick}>
        <div>
          <p className="md:text-2xl text-xl text-gray-800 font-semibold select-none">{title}</p>
          <p className="text-md text-gray-800 font-semibold select-none">{workPlace}</p>
          </div>
        <div className="text-[30px]">
          {open ? <AiOutlineMinus className="fill-gray-900"/> : <AiOutlinePlus className="fill-gray-900"/>}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className={`bg-slate-200 px-[30px] pb-[20px] text-gray-800  ${open ? "" : ""}`}>{description}</div>
      </Collapse>
    </div>
  );
};

export default ProjectItem;
