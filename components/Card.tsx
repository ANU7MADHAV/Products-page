import { LuMoveRight } from "react-icons/lu";
import { RxPerson } from "react-icons/rx";
import { FiUploadCloud } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

interface Props {
  title: string;
  amount: string;
  disc: string;
  otherClass: string;
}

const Card = ({ title, amount, disc, otherClass }: Props) => {
  return (
    <div className="flex min-w-[250px] max-w-[300px]  flex-col items-start gap-1 px-4 py-5 pl-5 shadow-xl lg:min-w-[300px]">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-sm font-light">{amount}</p>
      <p>{disc}</p>
      <button
        className={`flex items-center gap-1 rounded-md px-4 py-1 ${otherClass}`}
      >
        Get Started{" "}
        <span className="scale-150">
          <LuMoveRight />
        </span>
      </button>
      <div className=" mt-4 w-full border border-black/5 px-1"></div>

      <p className="mt-3  text-sm">What you&apos;ll get : </p>
      <div className="mt-2 flex flex-col gap-1">
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
      </div>
    </div>
  );
};

export default Card;
