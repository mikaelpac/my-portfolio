import React from "react";
import Image from "next/image";
import hotrad from './../../public/images/hotrad.png'
import me from './../../public/images/me.jpg'
import Link from "next/link";




const Hero = () => {
  return (
<section className="bg-indigo-700">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between items-center">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-4xl font-bold leading sm:text-4xl">Hey <span className="wave">👋</span> <br/>  I'm Mikael, <br/>
				<span className="text-yellow-500">a Full Stack Developer</span>
			</h1>
			<h1 className="text-4xl font-bold leading sm:text-4xl mb-4">living in Tampere</h1>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link  href="#experience" className="px-8 py-3 text-lg font-semibold rounded bg-yellow-500 dark:text-gray-900">My experience</Link>
			</div>
		</div>
		<div className="flex md:items-center rounded-lg justify-center max-w-3xl">
    <Image
          src={me}
          alt="A Photo of me"
          layout="responsive"
          className="w-auto rounded-3xl"
        />
		</div>
	</div>
</section>
  );
};

export default Hero;

