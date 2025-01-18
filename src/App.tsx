import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { NavigationBar } from "./navbar";
import { ThemeProvider, useTheme } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { SideSheet } from "./sidepopper";
import Hero from "./Hero";
import MyHero from "./myhero";
import { TimelineDemo } from "./Timeline";
import { Footer } from "./footer";
import StaffCard from "./staffcard";
import { Suspense } from "react";
import { AnimatedTestimonialsDemo } from "./coop";
import Timelinelink from "./timelinelink";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="wrapper sticky py-3 z-40 border-b-[1px]">
        <div className="flex md:flex-row justify-between items-center max-w-[1500px] w-100 m-auto md:show px-7">
          <div className="logo flex justify-center items-center text-xl ">
            <div className=" dark:text-slate-100">
              <a href="/">Health Information Science</a>
            </div>
          </div>
          <div className="flex">
            <div className="max-md:hidden">
              <NavigationBar />
            </div>
            <div className="max-md:px-2 px-1">
              <ModeToggle />
            </div>

            <div className="md:hidden">
              <SideSheet />
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Timelinelink />
              <AnimatedTestimonialsDemo />
            </>
          }
        />
        <Route
          path="/history"
          element={
            <>
              <TimelineDemo />
            </>
          }
        />
        <Route
          path="/staff"
          element={
            <>
              <Suspense fallback={<div>Loading!!!</div>}>
                <StaffCard />
              </Suspense>
            </>
          }
        />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
