export default function EmploymentRate() {
    return (
        <div className=" grid grid-cols-2 max-w-screen-2xl rounded-lg bg-slate-100 dark:bg-inherit dark:border-2 dark:border-slate-800 my-16 mt-32 m-auto px-24">            
        <div className="m-auto max-w-xl text-6xl p-0">
            <img src="./src/assets/timeline-pictures/jasonandstudent.png" alt="" className="rounded-lg" />
        </div>
        <div className="max-w-xl flex flex-col gap-3 text-[2rem] light:text-[#121212] dark:text-slate-100 p-8">
            <div className="pl-0 h-14 w-24 text-blue-200"><img src="./src/assets/timeline-pictures/handshake.svg" alt="" className="fill-cyan-500" /></div>
            <div className="py-4 text-blue-900 dark:text-blue-600 tracking-wide"><div className="bg-green text-blue-900 dark:text-blue-600 text-8xl">99%</div> Employment Rate for Graduates</div>
            <div className="text-2xl font-regular text-slate-700 dark:text-slate-200 pb-4">With three mandatory internships to graduate our Graduates are in high demand across multiple sectors.</div>
            <div className="text-lg p-1 px-2 size-fit text-black bg-blue-800 text-white font-semibold rounded-2xl">Common Positions</div>
            <div className="grid grid-cols-1 grid-rows-3 text-2xl pl-1 gap-3 text-slate-400 dark:text-slate-300 tracking-tight ">
                <div className="">Business Analyst</div>
                <div className="">Clinical Decision Support Analyst</div>
                <div className="">Health Data Reporting Specialist</div>
                <div className="">Data Quality Analyst</div>
                <div className="">Health Information System Coordinator</div>
                <div className="">Health Records Administrator</div>
            </div>
            

        </div>
        </div>


    )
}