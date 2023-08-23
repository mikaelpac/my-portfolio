'use client'
import React, { ReactNode, useState, useEffect } from "react";
import useDarkMode from "./utils/useDarkMode"
import Navigation from "./../components/Navigation"
import Hero from "./sections/hero"
import About  from "./sections/about"
import MyTimeline from "./sections/myTimeLine";
import Contact  from "./sections/contact"
import Footer from "./../components/Footer"
import Projects from "./sections/projects";

export default function Home() {
  const [mount, setMount]= useState<boolean>(false)
  const [colorTheme, setTheme] = useDarkMode();

  useEffect(() => {
    setMount(true)
   }, [])


  return (
    mount && 
    <>
    <Navigation colorTheme={colorTheme} setTheme={setTheme}/>
    <Hero/>
    <About colorTheme={colorTheme}/>
    <MyTimeline/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}
