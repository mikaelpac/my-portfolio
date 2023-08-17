'use client'
import React, { ReactNode, useState, useEffect } from "react";
import useDarkMode from "./utils/useDarkMode"
import Navigation from "./../components/Navigation"
import Hero from "./sections/hero"
import About  from "./sections/about"
import MyTimeLine from "./sections/myTimeLine"
import Contact  from "./sections/contact"
import Footer from "./../components/Footer"

export default function Home() {
  const [mount, setMount]= useState(false)
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
    <MyTimeLine/>
    <Contact/>
    <Footer/>
    </>
  )
}
