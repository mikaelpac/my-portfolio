import React from "react";
import Image from "next/image";
import mikaelprofile from './../../../public/images/mikaelprofile.png'
import myself from './../../../public/images/myself.jpg'

const Hero = () => {
  return (
<section className="bg-scroll bg-gradient-to-br from-indigo-500 to-blue-500 dark:bg-gradient-to-br dark:from-slate-950 dark:to-indigo-950 overflow-hidden" id="hero" style={{marginTop: "-80px"}} >
	<div className="flex md:flex-row flex-col items-center justify-center md:justify-center m-auto md:h-screen pt-28 md:pt-14">
		<div className="md:w-1/3  text-center md:max-w-xl max-w-4xl md:text-left items-center mb-12">
		<h1 className="text-3xl text-white dark:text-white font-bold leading sm:text-4xl">Hey <span className="wave">👋</span> <br/>  I&apos;m Mikael, <br/>
				<span className="text-yellow-500">a Full Stack Developer</span>
			</h1>
			<h1 className="text-3xl text-white dark:text-white font-bold leading sm:text-4xl mb-4">living in Tampere</h1>
			<div className="flex flex-col md:space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start">
				<a href="#experience" className="">
				<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold text-gray-900 rounded-lg shadow-lg dark:shadow-pink-500/30 group bg-gradient-to-br dark:from-purple-600 dark:to-pink-500 group-hover:from-purple-600 dark:group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
					<span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md dark:group-hover:bg-opacity-0">
						My Experience
					</span>
				</button>
				</a>
			</div>
		</div>
		<div className="">
		<Image
				src={mikaelprofile}
				alt="A Photo of me"
				className="lg:max-w-2xl md:max-w-md max-w-xs relative md:left-0 left-12"
				priority={true}
				width={500}
				/>
		</div>	

	</div>
</section>
  );
};

export default Hero;

