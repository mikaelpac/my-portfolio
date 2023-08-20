import React from "react";
import Image from "next/image";
import me from './../../../public/images/me.jpg'

const Hero = () => {
  return (
<section className="bg-scroll bg-gradient-to-br from-indigo-500 to-blue-500 dark:bg-gradient-to-br dark:from-slate-950 dark:to-indigo-950" id="hero" style={{marginTop: "-80px"}} >
	<div className="container flex min-h-screen flex-col justify-center md:px-8 px-4 md:py-16 mx-auto sm:py-18 lg:py-32 lg:flex-row lg:justify-between items-center max-w-6xl">
		<div className="flex flex-col justify-center md:p-6 px-0 py-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-3xl text-white dark:text-white font-bold leading sm:text-4xl">Hey <span className="wave">👋</span> <br/>  I&apos;m Mikael, <br/>
				<span className="text-yellow-500">a Full Stack Developer</span>
			</h1>
			<h1 className="text-3xl text-white dark:text-white font-bold leading sm:text-4xl mb-4">living in Tampere</h1>
			<div className="flex flex-col md:space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a href="#experience" className="">
				<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold text-gray-900 rounded-lg shadow-lg dark:shadow-pink-500/30 group bg-gradient-to-br dark:from-purple-600 dark:to-pink-500 group-hover:from-purple-600 dark:group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
					<span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md dark:group-hover:bg-opacity-0">
						My Experience
					</span>
				</button>
				</a>
			</div>
		</div>
		<div className="flex md:items-center rounded-sm justify-center max-w-sm mt-12 md:mt-0 ">
    <Image
          src={me}
          alt="A Photo of me"
          className="w-auto rounded-md shadow-2xl"
		  priority={true}
		  width={500}
        />
		</div>
	</div>
</section>
  );
};

export default Hero;

