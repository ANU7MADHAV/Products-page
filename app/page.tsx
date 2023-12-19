import Main from "@/components/Main";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <section className="xl:overflow-hidden">
      <nav>
        <NavBar />
      </nav>
      <div className="w-screen">
        <Main />
      </div>
    </section>
  );
}
