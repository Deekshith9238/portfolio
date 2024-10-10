import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="flixed top-0 -z-10 h-full w-full"></div>
        <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {/* <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
        
        <div className="container mx-auto ">
          <Navbar />
          <Hero/>
        </div>
      </div>
    </>
  );
}

export default App;
