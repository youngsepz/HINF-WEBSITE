"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Glow from "@/components/ui/glow";
import { useTheme } from "next-themes";
import Github from "@/components/logos/github";
import { BackgroundGradient } from "./components/ui/background-gradient";
import { BorderBeam } from "./components/ui/border-beam";
import { EvervaultCard, Icon } from "./components/ui/evervault-card";
import { LayersIcon } from "./components/ui/layers";
import { StethoscopeIcon } from "./components/ui/stethoscope";
import { UsersIcon } from "./components/ui/users";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/app-light.png";
      break;
    case "dark":
      src = "/app-dark.png";
      break;
    default:
      src = "/app-dark.png";
      break;
  }

  return (
    <div className="grid grid-cols-3 col-span-2 gap-6 p-16 pb-24 m-auto fade-bottom overflow-hidden">
      {/* <BackgroundGradient className="col-span-2 rounded-[22px] w-full p-4 sm:p-10 bg-[#89CFF0] dark:bg-zinc-900"> */}
      <div className="col-span-2 mx-auto flex max-w-container flex-col xl:px-8 gap-8 pt-0 sm:gap-8">
        <div className="flex flex-col gap-6 sm:gap-8">
          <Badge
            variant=""
            className="flex items-center justify-center w-[200px] animate-appear"
          >
            <a href="/" className="flex items-center gap-1 text-large">
              University of Victoria's
              <ArrowRightIcon className="h-3 w-3" />
            </a>
          </Badge>
          <h1 className="font-semibold z-10 text-left inline-block animate-appear dark:bg-slate-100 bg-black from-foreground to-muted-foreground bg-clip-text text-transparent drop-shadow-2xl text-6xl lg:text-8xl">
            <span className="block">Health</span>
            <span className="block">Information</span>
            <span className="block">Science</span>
          </h1>
          <p className="h-[150px] max-w-[48rem] text-sm text-slate-950 md:text-xl">
            The most established and premier health informatics program in
            Canada. A combination of Management, Information Technology,
            Healthcare.
          </p>
          <div className=" flex animate-appear gap-4 opacity-0 delay-300">
            <div className="flex animate-appear  gap-4 opacity-0 delay-300">
              <Button variant="default" size="lg" asChild>
                <a href="/">Get Started</a>
              </Button>
              <Button variant="glow" size="lg" asChild>
                <a href="/">
                  <Github className="mr-2 h-4 w-4" /> Github
                </a>
              </Button>
            </div>
          </div>
          <div className="relative pt-12">
            <MockupFrame
              className="animate-appear opacity-0 delay-700"
              size="small"
            >
              <Mockup type="responsive"></Mockup>
            </MockupFrame>
            <Glow
              variant="top"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
          </div>
        </div>
      </div>
      {/* </BackgroundGradient> */}

      <div className="grid grid-rows-3 text-xl gap-8">
        <div className="text-white bg-slate-800 dark:bg-slate-100 relative md:text-4xl text-4xl rounded-lg ">
          <div className="flex flex-col justify-end h-full p-4">
            <LayersIcon />
            <div className="text-4xl font-semibold">Information Technology</div>
            <div className="block text-xl italic">
              Coding, Databases, Clinical Implementations
            </div>
          </div>

          <BorderBeam
            colorTo="blue"
            colorFrom="lightblue"
            borderWidth={3}
            size={250}
            duration={8}
            delay={9}
          />
        </div>
        <div className="text-white bg-rose-950 dark:bg-slate-100 relative md:text-4xl text-4xl rounded-lg ">
          <div className="flex flex-col justify-end h-full p-4">
            <StethoscopeIcon />
            <div className="text-4xl font-semibold">Healthcare</div>
            <div className="block text-xl italic">
              Public Health, Security, Safety
            </div>
          </div>

          <BorderBeam
            colorTo="blue"
            colorFrom="lightblue"
            borderWidth={3}
            size={250}
            duration={8}
            delay={9}
          />
        </div>
        <div className="text-white bg-slate-950 dark:bg-slate-100 relative md:text-4xl text-4xl rounded-lg ">
          <div className="flex flex-col justify-end h-full p-4">
            <UsersIcon />
            <div className="text-4xl font-semibold">Management</div>
            <div className="block text-xl italic">
              Coordinating, Planning, Execution
            </div>
          </div>

          <BorderBeam
            colorTo="blue"
            colorFrom="lightblue"
            borderWidth={3}
            size={250}
            duration={8}
            delay={9}
          />
        </div>
      </div>
    </div>
  );
}
