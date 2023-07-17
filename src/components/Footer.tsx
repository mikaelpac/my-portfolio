import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4 text-center fixed bottom-0 left-0 w-full">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Mikael Paczkowski. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;