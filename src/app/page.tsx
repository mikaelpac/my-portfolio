'use client'
import MyTimeLine from "./../components/MyTimeLine"
import Hero from "../components/Hero"
import Navigation from "./../components/Navigation"
import Footer from "./../components/Footer"
import { AboutSection } from "./sections/about"
import  Contact  from "./sections/contact"
import React, { ReactNode, useState, useEffect } from "react";



export default function Home() {
  const [mount, setMount]= useState(false)

  useEffect(() => {
    setMount(true)

   }, [])


  return (
    mount && 
    <>
    <Navigation/>
    <Hero/>
    {/* <AboutSection/> */}
    <MyTimeLine/>
    <Contact/>
    <Footer/>
    </>
  )
}
