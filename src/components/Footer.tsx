import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="dark:bg-black bg-blue-950 py-16 px-6 text-white p-4">
      <div className="flex justify-center gap-6 mb-4">
        <Link href="https://www.linkedin.com/in/mikael-paczkowski-4550a2132/">
          <BsLinkedin size={24} />
        </Link>
        <Link href="https://github.com/mikaelpac/my-portfolio">
          <BsGithub size={24} />
        </Link>
      </div>
      <p className="text-sm text-center">
        &copy; {new Date().getFullYear()} Mikael Paczkowski. All rights
        reserved.
      </p>
      <p className="text-sm text-center mt-2">
        Made with ❤️ using Next.js, styled with tailwindcss.
      </p>
    </footer>
  );
};

export default Footer;
