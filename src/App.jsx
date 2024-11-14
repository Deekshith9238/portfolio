import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full"></div>
        {/* <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
        {/* <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div> */}
        <div className="container mx-auto ">
          <Navbar />
          <Hero/>
          <About/>
          <Technologies />
          <Experience />
        </div>
      </div>
    </>
  );
}

export default App;
