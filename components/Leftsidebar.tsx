import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { TbPlant } from "react-icons/tb";
import { SlPuzzle } from "react-icons/sl";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoPower } from "react-icons/io5";
import photo from "@/public/image.png";

const Leftsidebar = () => {
  const active = "Dashboard";
  return (
    <div className="flex flex-col justify-between">
      <div className="h-screen w-[160px]  bg-white  shadow-md ">
        <div className="flex flex-col items-center pb-4 shadow ">
          <Image src={photo} alt="avatar" className="scale-50 rounded-full" />
          <h3 className="-mt-8 flex items-center gap-1 pl-3 font-semibold">
            Ram Mohan
            <span className="text-blue-500">
              <FaAngleRight />
            </span>
          </h3>
          <p className="scale-75">rammohan@gamil.com</p>
        </div>
        <div className="flex flex-col gap-10">
          <div
            className={`mt-8 flex w-[140px] items-center py-2 pl-3 shadow-md ${
              active === "Dashboard" ? "bg-blue-200/80" : ""
            }`}
          >
            <span className="pr-2 text-blue-500">
              <MdDashboard />
            </span>
            Dashboard
          </div>

          <div className="flex w-[140px] items-center py-2 pl-3 shadow-md">
            <span className="pr-2 text-blue-500">
              <TbPlant />
            </span>
            Perks
          </div>

          <div className="flex w-[140px] items-center py-2 pl-3  shadow-md">
            <span className="rotate-45 pr-2 text-blue-500">
              <SlPuzzle />
            </span>
            Addons
          </div>
          <div className="flex w-[140px] items-center py-2 pl-3  shadow-md">
            <span className=" pr-2 text-blue-500">
              <MdOutlineSupportAgent />
            </span>
            Support
          </div>
        </div>
      </div>
      <div className="relative bottom-0 flex w-full items-center justify-center gap-2 bg-blue-100/90 py-1 text-center shadow">
        Log out{" "}
        <span className="text-red-500/80">
          <IoPower />
        </span>
      </div>
    </div>
  );
};

export default Leftsidebar;
