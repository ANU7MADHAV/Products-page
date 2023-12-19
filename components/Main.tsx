import Card from "./Card";
import HCard from "./HCard";
import Leftsidebar from "./Leftsidebar";
import RightSidebar from "./RightSidebar";

const Main = () => {
  return (
    <div className="flex h-screen w-screen">
      <div>
        <Leftsidebar />
      </div>

      <div className="mt-12 flex flex-col">
        <div className="relative md:left-5">
          <h1 className="mb-5 px-2 font-bold  md:text-2xl">
            Choose a plan that&apos;s just right for you!
          </h1>
        </div>

        <div className="mt-100 flex flex-col gap-4 ">
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:px-4 lg:flex lg:min-w-[600px] lg:items-center lg:justify-center lg:gap-3">
            <Card
              title="Basic"
              amount="$89.99/mo"
              disc="$9.9/mo"
              otherClass="bg-yellow-200"
            />
            <Card
              title="Standard"
              amount="$189/mo"
              disc="$199.99/mo"
              otherClass="bg-rose-400"
            />
            <Card
              title="Premium"
              amount="$389.99/mo"
              disc="$199.99/mo"
              otherClass="bg-fuchsia-400"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-row items-center justify-center shadow-xl lg:mt-5 xl:ml-7">
          <HCard />
        </div>
      </div>
      <div className="h-screen">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Main;
