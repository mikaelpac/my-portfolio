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
      <body className={`${inter.className} bg-slate-900 text-white`}>{children}</body>
      <Footer />
    </>
  );
};

export default Layout;
