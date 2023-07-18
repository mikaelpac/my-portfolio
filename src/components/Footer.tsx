import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-300 h-18 text-black p-4 items-center text-center bottom-0 left-0 w-full">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Mikael Paczkowski. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;