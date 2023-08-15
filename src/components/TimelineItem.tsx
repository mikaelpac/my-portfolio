
import React from "react";
import Image from "next/image";

interface TimelineItemProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  reverse: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  image,
  duration,
  reverse,
}) => {
  const flexDirection = reverse ? "flex-row" : "flex-row-reverse";

  return (
    <div className={` rounded-lg relative md:flex md:items-center mb-1 ${flexDirection} md:h-96`}>
      <div className={`md:w-1/2 ml-4 md:items-center content-between pt-3 gap-8 ${reverse ? "md:pr-8" : "md:pl-6"}`}>
        <h2 className={`text-xl md:text-3xl text-yellow-500 dark:text-yellow-400 font-bold`}>{duration}</h2>
        <h3 className="text-xl md:text-3xl text-black dark:text-white  mb-2">{title}</h3>
        <p className="text-lg text-black dark:text-slate-300 mb-4">{description}</p>
      </div>
      <div className={`md:w-1/2 max-h-80 flex justify-start ${reverse ? "" : ""}`}>
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={400}
          max-height={400}
          className="rounded-md px-4 py-2 object-contain transition ease-in-out md:hover:scale-103 transform "
        />
      </div>
      {title !== "AO Solutions Oy" && <hr className="h-px border-0 my-10 bg-gray-500 dark:bg-pink-500 dark:opacity-50"></hr>} 
      {/* TODO: Use last child selector instead */}
      <div className="absolute left-1/2 md:h-4/5 w-px dark:bg-pink-500 bg-gray-500 dark:opacity-75 transform -translate-x-1/2 dark:shadow-pink-500/30"></div>
    </div>
  );
};

export default TimelineItem;
