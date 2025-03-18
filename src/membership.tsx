export default function Membership() {
    return (
        <div className="max-w-screen-2xl rounded-lg bg-slate-100 dark:bg-inherit dark:border-2 dark:border-slate-800 my-16 mt-32 m-auto px-24">
            <div className="font-semibold text-7xl text-center">Our Affiliations</div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 py-4">
                <div className="bg-orange-100 rounded-lg">
                <div className="p-4">
                    <img src="./src/assets/IMIA.png" alt="" className="" />
                    <div className="pl-3 text-2xl">International Medical Informatics Association</div>
                </div>
                
                </div>
                <div className="bg-blue-200 rounded-lg"></div>
            </div>
        </div>
    )
}