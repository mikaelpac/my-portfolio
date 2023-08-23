
import Link from "next/link";
import React from "react";
import { Collapse } from "react-collapse"
import {AiOutlineMinus} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import {BiLinkExternal} from "react-icons/bi"

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
  link: string;
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
  colorCode,
  link
}) => {

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    toggle(index); // Call the toggle function without arguments
  };

  return (
    <div className="pt-[10px] md:mb-3 mb-2">
      <div className={`bg-slate-200 dark:bg-slate-300 py-[12px] md:px-[18px] px-[12px] shadow-md dark:shadow-none flex justify-between rounded-sm  items-center cursor-pointer ${open ? "rounded-b-none" : ""}`} onClick={handleClick}>
        <div className="w-full">
          <p className="md:text-2xl text-xl text-gray-800 font-semibold select-none">{title}</p>
          <p className={`text-xs md:text-sm mt-2 font-normal select-none text-center px-2 py-2 md:px-3 rounded-md  inline-block text-white `} style={{backgroundColor: colorCode}}>{workPlace}</p>
          <p className={` ml-2 text-xs md:text-sm mt-2 font-semibold select-none text-center px-2 md:px-3 py-2 rounded-md border-solid border-black  border-[1px] inline-block text-black `}>{technology}</p>
          {secondaryTechnology && <p className={` ml-2 text-xs md:text-sm  mt-2 font-semibold select-none text-center px-2 md:px-3 py-2 rounded-md border-solid border-black  border-[1px] inline-block text-black`}>{secondaryTechnology}</p>}
          </div>
        <div className="text-[30px]">
          {open ? <AiOutlineMinus className="fill-gray-900"/> : <AiOutlinePlus className="fill-gray-900"/>}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className={`bg-slate-200 flex items-end dark:bg-slate-300 md:px-[20px] px-[12px] pb-[20px] rounded-sm text-gray-800 ${open ? "rounded-t-none" : ""}`}>
        <p>{description}</p>
        {link &&
        <Link href={link} className="mr-1" rel="noopener noreferrer" target="_blank">
            <BiLinkExternal size={24}/>
          </Link>}
        </div>
    
      </Collapse>
    </div>
  );
};

export default ProjectItem;
