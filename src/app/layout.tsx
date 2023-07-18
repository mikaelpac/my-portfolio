"use client"; // This is a client component 👈🏽
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React, { ReactNode } from "react";
import Navigation from "./../components/Navigation";
import Footer from "./../components/Footer";

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      <body className={`${inter.className} bg-indigo-950 text-slate-100 mx-auto`}>{children}</body>
      <Footer />
    </>
  );
};

export default Layout;
