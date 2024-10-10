import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between ">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center space-x-5 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaBehance />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
