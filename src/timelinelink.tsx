import { TimelineSvg } from "./components/ui/timelinesvg";

export default function Timelinelink() {
  return (
    <div className="m-auto max-w-screen-2xl xlg:px-0 px-12 transition-shadow border-t-2 border-b-2">
      <div className="flex m-auto pl-0 max-w-screen-2xl bg-clip-text bg-gradient-to-r from-blue-600 to-blue-950 top-[-30px] text-[4rem] lg:text-[5rem] font-semibold text-transparent">
        Our History
      </div>
      <div className="font-semibold m-auto max-w-screen-2xl pb-4 text-2xl py-4">
        Click to Learn More.
      </div>

      <div className="relative group cursor-pointer m-auto px-8 2xl:px-0 max-w-screen-2xl bg-gradient-to-r from-blue-950 to-blue-600 rounded-xl">
        <div className="absolute z-[-200] -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-100 transition duration-1000 duration-200"></div>
        <div className="absolute z-[0] -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-10 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <a href="/history" className="">
          {" "}
          <TimelineSvg className="relative m-auto !overflow-hidden" />
        </a>
      </div>

      {/* <div className="grid grid-cols-2 grid-rows-1 gap-2 px-20">
        <div className=" font-semibold text-7xl text-white">
          <div className="">Learn about our History</div>
          <div className=" text-xl">
            We have spent the past 43 years as Canada's most established health
            informatics program.{" "}
          </div>
        </div>
        <div className="">
          <img src="src/assets/timeline-pictures/hinf-1987.jpg"></img>
        </div>
      </div> */}
    </div>
  );
}
