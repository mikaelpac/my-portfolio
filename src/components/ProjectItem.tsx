
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
  colorCode: string;
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
  colorCode
}) => {

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    toggle(index); // Call the toggle function without arguments
  };

  return (
    <div className="pt-[10px] mb-4">
      <div className={`bg-slate-200 py-[12px] px-[18px] flex justify-between rounded-md  items-center cursor-pointer ${open ? "rounded-b-none" : ""}`} onClick={handleClick}>
        <div className="">
          <p className="md:text-2xl text-xl text-gray-800 font-semibold select-none">{title}</p>
          <div className="">
          <p className={`text-xs text- mt-2 font-semibold select-none text-center px-3 py-2 rounded-2xl  border-[2px] border-solid inline-block text-black`} style={{borderColor: colorCode}}>{workPlace}</p>
          <p className={` ml-3 text-xs text- mt-2 font-semibold select-none text-center px-2 py-2 rounded-2xl border-solid border-black  border-[2px] inline-block text-black `}>{technology}</p>
          {secondaryTechnology && <p className={` ml-2 text-xs text- mt-2 font-semibold select-none text-center px-2 py-2 rounded-2xl border-solid border-black  border-[2px] inline-block text-black`}>{secondaryTechnology}</p>}
          </div>
          </div>
        <div className="text-[30px]">
          {open ? <AiOutlineMinus className="fill-gray-900"/> : <AiOutlinePlus className="fill-gray-900"/>}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className={`bg-slate-200 px-[20px] pb-[20px] rounded-md text-gray-800  ${open ? "rounded-t-none" : ""}`}>{description}</div>
      </Collapse>
    </div>
  );
};

export default ProjectItem;
