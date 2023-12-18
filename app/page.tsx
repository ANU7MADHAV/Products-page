import Leftsidebar from "@/components/Leftsidebar";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <main className=" h-screen w-screen">
      <nav>
        <NavBar />
      </nav>
      <div className="flex h-screen">
        <Leftsidebar />
        <Main />
        <RightSidebar />
      </div>
    </main>
  );
}
