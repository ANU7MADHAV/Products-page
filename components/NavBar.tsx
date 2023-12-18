import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import photo from "@/public/itachi.jpg";

const NavBar = () => {
  return (
    <div className="relative flex h-[80px] w-screen">
      <div className="min-w-[160px] bg-white"></div>
      <div className="absolute -top-[80px] left-12 mb-5 h-[300px] w-[100px] rotate-45 bg-white">
        {/* Triangle cut design */}
      </div>
      <div className="-z-10 flex-1 bg-blue-200/90 "></div>

      <div className="absolute right-[80px] top-4 z-20 mr-5 mt-1 flex h-[35px] w-[200px] items-center gap-2">
        <div className="flex h-full min-w-[200px] items-center overflow-hidden whitespace-nowrap rounded-sm bg-white px-4 ">
          <div className="flex h-full items-center">
            <Image
              alt="photo"
              src={photo}
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
            <p className="scale-90 text-xs ">XYZ Enterorises Pvt. Ltd</p>
          </div>
        </div>
        <div className="flex h-[20px] w-auto items-center rounded-sm bg-white px-2 py-4 ">
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
