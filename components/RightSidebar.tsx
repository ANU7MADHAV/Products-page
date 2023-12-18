import { CiBellOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div className="absolute right-0 h-screen w-[60px] bg-blue-200/90">
      <div className="flex h-full flex-col items-center justify-between">
        <div className="mt-5 scale-150">
          <span className="scale-50 rounded-full bg-red-500 text-sm">3</span>
          <CiBellOn />
        </div>
        <div className="shadow-light-300 mb-5 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
          <span className=" text-red-500">
            <FaPlus />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
