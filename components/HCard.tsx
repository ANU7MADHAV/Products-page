import { FiUploadCloud } from "react-icons/fi";
import { LuMoveRight } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { IoCheckmarkDone } from "react-icons/io5";

const HCard = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row ">
      {/* First card */}
      <div className="flex flex-col items-start gap-2 pl-5  pt-3 shadow-2xl md:flex-row md:justify-between   ">
        <div className="space-y-2">
          <span className=" rounded-xl bg-lime-400/80 px-2 text-sm font-light">
            Free Forever
          </span>
          <h1 className="text-xl font-semibold ">Free Starter</h1>
          <p className="text-sm">
            The quickest and easiest way to try Protocols
          </p>
          <button className="my-2 flex items-center gap-1 rounded-xl bg-lime-400/80 px-3 py-1">
            Get Started{" "}
            <span>
              <LuMoveRight />
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-2 whitespace-nowrap pb-5 pr-9">
          <h6>What you&apos;ll get :</h6>
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-1 pl-2 text-sm">
              <span>
                <RxPerson />
              </span>
              Upto 25 Users
            </p>

            <p className="flex items-center gap-1 pl-2 text-sm">
              <span>
                <FiUploadCloud />
              </span>
              Upto 25gb storage
            </p>

            <p className="flex items-center gap-1 pl-2 text-sm">
              <span>
                <MdOutlineEmail />
              </span>
              Email support
            </p>

            <p className="flex items-center gap-1 pl-2 text-sm">
              <span>
                <IoCheckmarkDone />
              </span>
              Email support
            </p>
          </div>
        </div>
      </div>
      {/* Second card */}
      <div className="flex flex-col items-start gap-1 pb-3 pl-5 pt-3 shadow-2xl md:flex-row md:justify-between">
        <div className="space-y-2">
          <span className=" rounded-xl bg-lime-400/80 px-2 text-sm font-light">
            Let&apos;s Connect
          </span>
          <h1 className="text-xl font-semibold ">EnterPrise Plan</h1>
          <p className="text-left text-sm md:max-w-md">
            Effortlessely customize and fine-tune services as your needs shift,
            ensuring the perfect tools for success
          </p>
          <button className="my-2 flex items-center gap-1 rounded-xl bg-lime-400/80 px-3 py-1">
            Contact Us{" "}
            <span>
              <LuMoveRight />
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-2 whitespace-nowrap pb-5 pr-10">
          <h6>What you&apos;ll get :</h6>
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-1 pl-2 text-sm">
              <span>
                <RxPerson />
              </span>
              Upto 25 Users
            </p>

            <p className="flex items-center gap-1 pl-2 text-sm">
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
