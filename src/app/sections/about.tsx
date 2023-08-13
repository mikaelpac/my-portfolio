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
      <div className=" backdrop-brightness-50 backdrop-blur-sm w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-md p-4 text-center p-4 text-white">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id nisl justo. Pellentesque eget accumsan magna. Maecenas turpis quam, pulvinar eget eleifend a, eleifend tincidunt lorem. In lacus ligula, ornare eu metus ac, scelerisque mattis augue. Maecenas cursus et metus a dictum. Suspendisse sit amet consectetur urna, nec viverra tellus. Pellentesque rhoncus, nisl et pulvinar ultricies, augue.
      </div>
  </div>

  );
};