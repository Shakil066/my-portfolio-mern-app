import { Link, NavLink } from "react-router-dom";
import "./Styles.css";
import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { CgProfile } from "react-icons/cg";



const Navbar = () => {


    const navLinks = <>
        <li>
            <NavLink to="/">
                <FaHome></FaHome>
                <span>Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/about-me">
                <CgProfile></CgProfile>
                <span>About Me</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/all-projects">
                <GoProjectRoadmap></GoProjectRoadmap>
                <span>All Projects</span>
            </NavLink>
        </li>
    </>


    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-white drop-shadow-lg">
                    <div className="flex justify-between w-[1280px] mx-auto">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <Link className="font-bold text-lg" to="/">Asraf Shakil <span className="text-[orangered]">Portfolio</span></Link>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Page content here */}
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;