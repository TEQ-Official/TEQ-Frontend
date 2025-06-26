import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

export default function SmallTestimonyCard ({rotate}:{rotate : string}){
        return (
            <div className={`hidden absolute -left-20 top-1/4 text-left text-sm lg:w-[350px] bg-white rounded-2xl shadow-lg lg:flex items-start ${rotate}`}>
                    <Image width={1000} height={1000} src="/freepik.png" alt="freepik" className="w-40 h-40 rounded object-cover" />
                    <div className="p-5 flex justify-between flex-col  gap-10">
                        <p className="text-gray-700">
                            The English clinic truly serves to cure your spoken and written English
                        </p>
                        <span>
                            <p className="font-semibold text-gray-500">Nancy Icoma</p>
                            <span className="flex items-center gap-2 text-base">5 <BsStarFill className="text-[#0047AB]" /> </span>
                        </span>
                    </div>
            </div>
        )
    }
