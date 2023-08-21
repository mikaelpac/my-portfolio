"use client"; // This is a client component 👈🏽
import React, { ReactNode, useState, useEffect } from "react";

function Navigation({ colorTheme, setTheme }) {

  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [backgroundTransparency, setBackgroundTransparency] = useState<number>(0);
  const [padding, setPadding] = useState<number>(30);
  const [boxShadow, setBoxShadow] = useState<number>(0);


  useEffect(() => {
    let backgroundTransparencyVar = clientWindowHeight / 600;
    if (backgroundTransparencyVar < 1) {
      let paddingVar = 30 - backgroundTransparencyVar * 20;
      let boxShadowVar = backgroundTransparencyVar * 0.1;
      setBackgroundTransparency(backgroundTransparencyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);


  return (
    <div className="sticky p-4 px-6 md:px-20 top-0 z-10 backdrop-blur-sm" style={{ background: `rgba(0, 0, 0, ${backgroundTransparency})` }}>
      <nav className="flex items-center max-w-7xl m-auto justify-between text-white dark:text-white">
        <div className="select-none">
          {colorTheme === "light" ? (
            <svg
              onClick={() => setTheme("light")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer  transform transition duration-300 hover:scale-125"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="icon-fill"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          ) : (
            <svg
              onClick={() => setTheme("dark")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer  transform transition duration-300 hover:scale-125"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="icon-fill"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#about">
              <button className="md:hover:text-yellow-500 ml-5 mr-3 select-none">About</button>
            </a>
          </li>
          <li>
            <button className=" bg-yellow-500 hover:bg-white-700 font-bold text-black py-2 px-4 rounded  transform transition duration-300 hover:scale-110 select-none">
              <a href="#contact">
                Connect
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;