import { CiBellOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div className="right-0 hidden h-screen w-[60px] flex-grow bg-blue-200/90 xl:flex">
      <div className="flex h-full flex-col items-center justify-between">
        <div className="mt-5 scale-150">
          <div className="relative">
            <CiBellOn />
            <div className="absolute -right-1 -top-1 flex h-2 w-2 items-center justify-center rounded-full bg-red-500 text-white">
              <span className="scale-50 text-sm">3</span>{" "}
            </div>
          </div>
        </div>
        <div className="shadow-light-300 mb-5 ml-2 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
          <span className=" text-red-500">
            <FaPlus />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
