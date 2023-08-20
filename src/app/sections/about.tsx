import sunset2 from "../../../public/images/sunset2.jpg"
import forest2 from "../../../public/images/forest2.jpg"
import Image from "next/image"

 const About = ({colorTheme}) => {
  return (
    <div className="md:h-96 h-64 w-screen relative align-middle " id="about">
      <Image src={colorTheme === "light" ? sunset2 : forest2} alt="Sunset" className="md:h-96 h-64 object-cover dark:object-center"/>
      <div className="absolute inset-0 flex justify-center items-center">
      <p className="md:text-2xl text-base max-w-5xl sm:text-lg placeholder:font-bold text-center dark:backdrop-blur-sm text-white rounded-md backdrop-brightness-50 px-2 mx-4 md:mx-14 py-2 md:py-4 shadow-md">
        I&apos;m a 27 year-old Finnish-American who loves prog music, going to fireplaces with friends and writing clean code.
      <br/> <br/>I have about two years of work experience and my skill set includes  <span className=" font-bold text-yellow-500">React</span>, <span className=" font-bold text-yellow-500">Flutter</span>, <span className=" font-bold text-yellow-500">Nodejs</span>, <span className=" font-bold text-yellow-500">GraphQL</span> & <span className=" font-bold text-yellow-500">PostgreSQL </span> to name a few.</p>
    </div>
  </div>
  );
};

export default About;