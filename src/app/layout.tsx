'use client'
import './globals.css'
import type { Metadata } from 'next'
import React, { ReactNode } from "react";
import Navigation from "./../components/Navigation";
import Footer from "./../components/Footer";


interface LayoutProps {
  children: ReactNode;
}




const Layout = ({ children }: LayoutProps) => {



    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (typeof window !== "undefined") {
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
  
    }

  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth">
      <body className="">{children}</body>
    </html>
  );
};

export default Layout;
