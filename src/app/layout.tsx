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

    if (typeof window !== "undefined") {
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }

  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
};

export default Layout;
