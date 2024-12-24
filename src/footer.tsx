import { IconBrandX } from '@tabler/icons-react'
import { IconBrandInstagram } from '@tabler/icons-react'
import { IconBrandFacebook } from '@tabler/icons-react'
import { IconBrandYoutube } from '@tabler/icons-react'

export function Footer() {
    return (
        <div className="w-[99.5%] m-auto border-t-[1px] border-slate-300 text-slate-500">
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 m-auto max-w-7xl max-xl:px-7 md:p-16 md:gap-9 p-8 gap-4 items-center justify-center">
                <div className="font-extralight cursor-pointer md:block flex justify-center items-center flex-col">
                    <div className="txt">
                        <img
                            className=""
                            src="src/assets/uvic-wordmark-colour.svg"
                            height="175px"
                            width="125px"
                        ></img>
                    </div>
                    <div className="flex text-gray-800">
                        <IconBrandX
                            height="32px"
                            width="32px"
                            className="hover:bg-gray-300 rounded-md p-1"
                            stroke={1.5}
                        />
                        <IconBrandInstagram
                            height="32px"
                            width="32px"
                            className="hover:bg-gray-300 rounded-md p-1"
                            stroke={1.5}
                        />
                        <IconBrandFacebook
                            height="32px"
                            width="32px"
                            className="hover:bg-gray-300 rounded-md hover:text-blue-600 p-1"
                            stroke={1.5}
                        />
                        <IconBrandYoutube
                            height="32px"
                            width="32px"
                            className="hover:text-red-600 hover:bg-gray-300 rounded-md gap-8 p-1"
                            stroke={1.5}
                        />
                    </div>
                    <div className="">School of Health Information Science</div>
                </div>

                <div className="font-extralight cursor-pointer md:block flex justify-center items-center flex-col">
                    <div className="font-code font-semibold text-lg text-slate-500">
                        Resources
                    </div>

                    <div className=" text-slate-600 w-auto font-semi-bold">
                        <span className=" hover:border-l-4 hover:border-l-blue-600 hover:pl-1">
                            Undergraduate Programs
                        </span>
                    </div>
                    <div className="text-slate-600">
                        <span className=" hover:border-l-4 hover:border-l-blue-600 hover:pl-1">
                            Undergraduate Programs
                        </span>
                    </div>
                    <div className="text-slate-600">
                        <span className=" hover:border-l-4 hover:border-l-blue-600 hover:pl-1">
                            Undergraduate Programs
                        </span>
                    </div>
                </div>

                <div className="font-extralight cursor-pointer md:block flex justify-center items-center flex-col">
                    <div className="font-code font-semibold text-lg text-slate-500">
                        Resources
                    </div>

                    <div className=" text-slate-600 w-auto font-semi-bold">
                        <span className=" hover:border-l-4 hover:border-l-blue-600 hover:pl-1">
                            Undergraduate Programs
                        </span>
                    </div>
                    <div className="text-slate-600">
                        <span className=" hover:border-l-4 hover:border-l-blue-600 hover:pl-1">
                            Undergraduate Programs
                        </span>
                    </div>
                    <div className="text-slate-600">
                        <span className=" hover:border-l-4 hover:border-l-blue-600 hover:pl-1">
                            Undergraduate Programs
                        </span>
                    </div>
                </div>

                <div className="font-extralight cursor-pointer md:block flex justify-center items-center flex-col">
                    <div className="font-code font-semibold text-lg text-slate-500">
                        Resources
                    </div>

                    <div className=" text-slate-600 w-auto font-semi-bold">
                        <span className=" hover:border-l-4 hover:border-l-blue-600 hover:pl-1">
                            Undergraduate Programs
                        </span>
                    </div>
                    <div className="text-slate-600">
                        <span className=" hover:border-l-4 hover:border-l-blue-600 hover:pl-1">
                            Undergraduate Programs
                        </span>
                    </div>
                    <div className="text-slate-600">
                        <span className=" hover:border-l-4 hover:border-l-blue-600 hover:pl-1">
                            Undergraduate Programs
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
