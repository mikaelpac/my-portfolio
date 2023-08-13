'use client'
import MyTimeLine from "./../components/MyTimeLine"
import Hero from "../components/Hero"
import Navigation from "./../components/Navigation"
import Footer from "./../components/Footer"
import { AboutSection } from "./sections/about"
import  Contact  from "./sections/contact"
import React, { ReactNode, useState, useEffect } from "react";
import useDarkMode from "./utils/useDarkMode"



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
    <AboutSection colorTheme={colorTheme}/>
    <MyTimeLine/>
    <Contact/>
    <Footer/>
    </>
  )
}
