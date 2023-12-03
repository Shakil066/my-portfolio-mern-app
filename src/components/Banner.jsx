
import { Link } from "react-router-dom";
import BannerImg from "../assets/banner-bg.jpg";
import { FaEye } from "react-icons/fa";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';




const Banner = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="h-[500px] relative max-w-[1280px] mx-auto" data-aos="zoom-in">
            <img className="w-full h-full object-cover" src={BannerImg} alt="image" />
            <div className="h-[500px] w-full bg-[#00000090] absolute top-0 left-0 flex  flex-col items-center justify-center space-y-5">
                <h1 className="text-center text-white text-2xl md:text-3xl lg:text-5xl font-bold">{"Ali Ashraf Sakil"}</h1>
                <p className="text-sm md:text-lg lg:text-xl text-center text-white">{"Ali Asraf | Data Analyst"}</p>
                {/* <Link to="/rooms" className="btn btn-secondary text-center" >Book Now</Link> */}
                <div className="flex items-center justify-center py-3">
                    <Link to={`/all-projects`} className="flex items-center justify-center w-full bg-[#db332a] py-2 px-5 rounded-full text-center  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        <FaEye className="text-xl"></FaEye>
                        <span className="ml-2">View All Projects</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;