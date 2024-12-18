import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 flex flex-wrap pb-4 lg:mb-35">
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Deekshith H U</h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full stack Gen AI Developer</span>
                <p className="md:text-left my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
            </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 lg:flex lg:justify-center lg:items-center lg:p-8">
            <div className="flex justify-center lg:justify-end">
                <img className="max-w-full h-auto" src="src\assets\DEEK6343 copy.jpg" alt="profile-photo"/>
            </div>
        </div>
    </div>
  )
}

export default Hero;
