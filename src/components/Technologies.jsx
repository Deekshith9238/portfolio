import { RiReactjsLine } from "react-icons/ri"
import { FaPython } from "react-icons/fa"
import { FaJava } from "react-icons/fa"
import { SiMysql } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { SiMicrosoftazure } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-100 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-300 p-4">
                <FaPython className="text-7xl text-yellow-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-300 p-4">
                <FaJava className="text-7xl text-blue-800"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-300 p-4">
                <SiMicrosoftazure className="text-7xl text-blue-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-300 p-4">
                <RiFirebaseFill className="text-7xl text-yellow-400"/>
        </div> 
        <div className="rounded-2xl border-4 border-neutral-300 p-4">
                <SiMysql className="text-7xl text-blue-700"/>
        </div> 
        </div>
      
    </div>
  )
}

export default Technologies
