
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
  const flexDirection = reverse ? "flex-row-reverse" : "flex-row";

  return (
    <div className={`relative flex md:items-start mt-12 mb-12 ${flexDirection}`}>
      <div className={`w-1/2 max-h-96  flex justify-end ${reverse ? "pl-4" : "pr-4"}`}>
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={400}
          max-height={400}
          className="rounded-md object-contain transition ease-in-out hover:scale-105 transform "
        />
      </div>
      <div className={`w-1/2 ml-4 ${reverse ? "pr-4" : "pl-4"}`}>
        <h2 className={`text-xl md:text-3xl text-yellow-400 font-bold`}>{duration}</h2>
        <h3 className="text-xl md:text-3xl text-white font-bold mb-2">{title}</h3>
        <p className="text-lg text-gray-300 mb-4 md:block">{description}</p>
      </div>
      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-500 transform -translate-x-1/2 "></div>

    </div>
  );
};

export default TimelineItem;
