
import { Link } from "react-router-dom";
import BannerImg from "../assets/banner-bg.jpg";
import { FaEye } from "react-icons/fa";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';


const ToolsCard = ({card}) => {
    console.log(card, 'inside tools card');

    const { id, name, photo } = card;

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="hover:cursor-pointer" data-aos="zoom-in">
            <div>
                <img className="w-full rounded-t-lg h-[200px] object-cover" src={photo} alt="room image" />
            </div>
            <div className="w-full min-h-[100px] bg-white rounded-b-lg p-4 drop-shadow-md">
                <h2 className="text-2xl font-bold">{name}</h2>
                <div className="flex items-center justify-center py-3">
                    <Link to={`/projects/${id}`} className="mt-6 flex items-center justify-center w-full bg-[#db332a] py-3 px-6 text-center  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        <FaEye className="text-xl"></FaEye>
                        <span className="ml-2">View Detatails</span>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ToolsCard;