import React from "react";
import Image from "next/image";
import hotrad from './../../public/images/hotrad.png'
import me from './../../public/images/me.jpg'
import Link from "next/link";




const Hero = () => {
  return (
<section className="bg-black">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between items-center">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-4xl font-bold leading sm:text-4xl">Hey <span className="wave">👋</span> <br/>  I&apos;m Mikael, <br/>
				<span className="text-yellow-500">a Full Stack Developer</span>
			</h1>
			<h1 className="text-4xl font-bold leading sm:text-4xl mb-4">living in Tampere</h1>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link  href="#experience" className=""><button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-pink-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Purple to blue
  </span>
</button></Link>
			</div>
		</div>
		<div className="flex md:items-center rounded-lg justify-center max-w-xl ">
    <Image
          src={me}
          alt="A Photo of me"
          layout="responsive"
          className="w-auto rounded-3xl shadow-md"
        />
		</div>
	</div>
</section>
  );
};

export default Hero;

