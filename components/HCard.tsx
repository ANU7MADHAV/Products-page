import { FiUploadCloud } from "react-icons/fi";
import { LuMoveRight } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { IoCheckmarkDone } from "react-icons/io5";

const HCard = () => {
  return (
    <div className="flex  justify-center gap-5">
      {/* First card */}
      <div className="flex h-auto w-[500px] flex-row pl-6 pt-5 shadow-xl">
        <div className="mt-5 ">
          <span className="ml-5 rounded-xl  bg-lime-400/80  px-4 py-1 text-xs ">
            Free Forever
          </span>
          <h1 className="ml-5 mt-4 text-2xl font-bold">Free Starter</h1>
          <p className="text-md ml-5">
            The quickest and easiest way to try Protocols
          </p>
          <button className=" mb-5 ml-5 mt-3 flex items-center gap-1  rounded-md bg-lime-400/80 px-4 py-1">
            Get Started{" "}
            <span>
              <LuMoveRight />
            </span>
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-3 pr-6">
          <h6 className="whitespace-nowrap">What you&apos;ll get :</h6>
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-1 text-xs">
              <span>
                <RxPerson />
              </span>
              Upto 25 Users
            </p>

            <p className="flex items-center gap-1 text-xs">
              <span>
                <FiUploadCloud />
              </span>
              Upto 25gb storage
            </p>

            <p className="flex items-center gap-1 text-xs">
              <span>
                <MdOutlineEmail />
              </span>
              Email support
            </p>

            <p className="flex items-center gap-1 text-xs">
              <span>
                <IoCheckmarkDone />
              </span>
              Email support
            </p>
          </div>
        </div>
      </div>
      {/* Second card */}
      <div className="flex h-auto w-[500PX] flex-row gap-2 pl-6 pt-5 shadow-xl">
        <div className="mt-5 ">
          <span className="ml-5 rounded-xl  bg-blue-400/80   px-4 py-1 text-xs ">
            Let&apos;s Connect
          </span>
          <h1 className="ml-5 mt-4 text-2xl font-bold">EnterPrise Plan</h1>
          <p className=" ml-5 mt-1 flex items-center gap-1 text-xs">
            Effortlessely customize and fine-tune services as your needs shift,
            ensuring the perfect tools for success
          </p>
          <button className=" mb-5 ml-5 mt-3 flex items-center gap-1  rounded-md bg-blue-400/80 px-4 py-1">
            Contact Us{" "}
            <span>
              <LuMoveRight />
            </span>
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-3 pr-6">
          <h6 className="whitespace-nowrap">What you&apos;ll get :</h6>
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-1 text-xs">
              <span>
                <RxPerson />
              </span>
              Upto 25 Users
            </p>

            <p className="flex items-center gap-1 text-xs">
              <span>
                <FiUploadCloud />
              </span>
              Upto 25gb storage
            </p>

            <p className="flex items-center gap-1 text-xs">
              <span>
                <MdOutlineEmail />
              </span>
              Email support
            </p>

            <p className="flex items-center gap-1 text-xs">
              <span>
                <IoCheckmarkDone />
              </span>
              Email support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HCard;
