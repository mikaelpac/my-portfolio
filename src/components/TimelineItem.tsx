
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {BiLinkExternal} from "react-icons/bi"

interface TimelineItemProps {
  title: string;
  description: string;
  image: StaticImageData;
  duration: string;
  reverse: boolean;
  link: string | null;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  image,
  duration,
  reverse,
  link
}) => {

  const flexDirection:string = reverse ? "flex-row" : "flex-row-reverse";
  const isMobileAppImg:boolean = title === "AO Solutions Oy"

  return (
    <div className={` rounded-lg relative md:flex md:items-center mb-1 ${flexDirection} md:h-96`}>
      <div className={`md:w-1/2 mx-4 md:items-center content-between pt-3 gap-8 md:px-5`}>
        <h2 className={`text-2xl md:text-3xl text-yellow-500 dark:text-yellow-400 font-bold`}>{duration}</h2>
      {link ?
          <Link href={link} rel="noopener noreferrer" target="_blank">
            <div className="flex justify-start items-center mb-2">
            <h3 className="text-xl font-bold md:font-normal md:text-3xl text-black dark:text-white">{title}</h3>
            <BiLinkExternal className="ml-2 md:mt-1 md:text-2xl text-xl"/>
            </div>
          </Link>  
         : <h3 className="text-xl md:text-3xl font-bold md:font-normal text-black dark:text-white  mb-2">{title}</h3> }
        <p className="text-lg text-black dark:text-slate-300 mb-4">{description}</p>
      </div>
      <div className={`md:w-1/2 md:max-h-80 flex md:px-5 px-4 justify-start ${reverse ? "" : ""} ${isMobileAppImg ? "max-h-80" : ""}`}>
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={400}
          max-height={400}
          className="rounded-md py-2 object-contain transition ease-in-out md:hover:scale-103 transform "
        />
      </div>
     {/* TODO: Use last child selector instead */}
    {!isMobileAppImg && <hr className="h-px border-0 my-8 mx-2 bg-gray-500 dark:bg-pink-500 dark:opacity-60"></hr>}
      <div className="absolute left-1/2 md:h-4/5 w-px dark:bg-pink-500 bg-gray-500 dark:opacity-75 transform -translate-x-1/2 dark:shadow-pink-500/30"></div>
    </div>
  );
};

export default TimelineItem;
