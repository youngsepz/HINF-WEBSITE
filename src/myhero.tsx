import { WaypointsIcon } from "./components/ui/waypoints";

export default function MyHero() {
  return (
    <>
      <div className="grid  grid-cols-4 sm:px-6 px-6 grid-rows-3 max-w-7xl text-4xl md:text-6xl py-20 h-[90vh] m-auto gap-8">
        <div className="relative col-span-4 row-span-4  rounded-md">
          {/* <div className="absolute group-hover:opacity-100 transition duration-200 -inset-0.5 bg-gradient-to-r from-blue-600 to-orange-600 rounded-md blur"></div> */}
          <div className="relative group h-full p-4 font-semibold sm:text-4xl md:text-5xl lg:text-8xl row-span-3 col-span-2 rounded-md">
            <div className="">
              <div className="flex">
                <div className="text-[#D8C4B6] text-xl p-2">
                  University of Victoria's
                </div>
                <div className=""></div>
              </div>
              <div className="animate-appear select-none">
                School of Health Information Science
              </div>
              <div className="py-4 md:text-3xl text-red-700 font-light text-xl text-backdrop">
                Canada's most established health informatics program.
                <span className="text-blue-800"> </span>
              </div>
              <div className="grid gap-8 grid-cols-3 grid-rows-2 text-lg font-bold text-green-600">
                <div className=" flex h-[75px] items-center justify-center bg-blue-200 text-slate-600 rounded-md">
                  <WaypointsIcon />
                  Information Technology
                </div>
                <div className=" flex items-center justify-center bg-orange-200 text-green-600 rounded-md">
                  <WaypointsIcon />
                  Management
                </div>
                <div className=" flex items-center justify-center bg-orange-200 text-green-600 rounded-md">
                  <WaypointsIcon />
                  Healthcare
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="text-xl bg-green-200 col-span-1 rounded-md">
          Information Technology
        </div>
        <div className="bg-pink-200 col-span-1 rounded-md">Management</div>
        <div className="bg-blue-200 col-span-1 rounded-md">Healthcare</div> */}
      </div>
    </>
  );
}
