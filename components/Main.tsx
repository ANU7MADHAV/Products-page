import Card from "./Card";
import HCard from "./HCard";

const Main = () => {
  return (
    <div className="mt-10 pl-12">
      <h1 className="text-2xl font-bold">
        Choose a plan that&apos;s just right for you !
      </h1>
      <div className="flex justify-center gap-10 pl-5">
        <Card
          title="Basic"
          amount="$ 89.99/mo"
          disc="$ 9.9/mo"
          otherClass=" bg-yellow-200 "
        />
        <Card
          title="Standard"
          amount="$ 189/mo"
          disc="$ 199.99/mo"
          otherClass="bg-rose-400"
        />
        <Card
          title="Premium"
          amount="$ 389.99/mo"
          disc="$ 199.99/mo"
          otherClass="bg-fuchsia-400"
        />
      </div>
      <div className="flex justify-center">
        <HCard />
      </div>
    </div>
  );
};

export default Main;
