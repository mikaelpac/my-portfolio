import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import sunset2 from "../../../public/images/sunset2.jpg"
import sunset from "../../../public/images/sunset.jpg"
import sunset3 from "../../../public/images/sunset3.jpg"
import sunset4 from "../../../public/images/sunset4.jpg"
import forest from "../../../public/images/forest.jpg"
import Image from "next/image"
import React, { ReactNode, useState, useEffect } from "react";


export const AboutSection = ({colorTheme}) => {
  return (
    <div className="md:h-96 h-64 w-screen relative align-middle " id="about">
      <Image src={colorTheme === "light" ? sunset4 : forest} alt="Sunset" className="md:h-96 h-64 object-cover dark:object-center"/>
      <div className="absolute inset-0 flex justify-center items-center">
      <p className="md:text-2xl text-base sm:text-lg placeholder:font-bold lg:w-1/2 w-4/5 text-center text-white rounded-md backdrop-blur-sm backdrop-brightness-50 px-4 py-2 md:py-4 md:px-8 shadow-md">
        I&apos;m a 27 year-old Finnish-American who loves prog music, going to fireplaces with friends and writing clean code.
      <br/> <br/>I have about two years of work experience and my skillset includes  <span className=" font-bold text-yellow-500">React</span>, <span className=" font-bold text-yellow-500">Flutter</span>, <span className=" font-bold text-yellow-500">Nodejs</span>, <span className=" font-bold text-yellow-500">GraphQL</span> & <span className=" font-bold text-yellow-500">PostgreSQL </span> to name a few.</p>
    </div>
  </div>
  );
};