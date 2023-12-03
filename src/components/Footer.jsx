import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { useEffect } from "react";
import QRCode from "react-qr-code";
import ProfileImg from "../assets/profile.jpeg";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaKaggle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";




const Footer = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    const footerLinks = (
        <>
            <Link to="/" className="text-sm lg:text-base">Home</Link>
            {/* <Link to="/projects" className="text-sm lg:text-base">Projects</Link> */}
            <Link to="/all-projects" className="text-sm lg:text-base">All Projects</Link>
            <Link to="/about-me" className="text-sm lg:text-base">About Me</Link>
        </>
    );

    const socialLinks = (
        <>
            {/* kaggle */}
            <Link to="https://www.kaggle.com/ailashrafsakil">
                <FaKaggle className="text-2xl lg:text-3xl" />
            </Link>
            {/* linkedin */}
            <Link to="https://www.linkedin.com/in/ali-ashraf-sakil-536771208">
                <FaLinkedin className="text-2xl lg:text-3xl" />
            </Link>
            {/* twitter */}
            <Link to="https://twitter.com/Shakil36347274" >
                <FaTwitter className="text-2xl lg:text-3xl" />
            </Link>
            {/* leetcode */}
            <Link to="https://leetcode.com/AshrafSakil066">
                <SiLeetcode className="text-2xl lg:text-3xl" />
            </Link>
        </>
    );

    return (
        <footer className="p-6 drop-shadow bg-base-100 mt-8 border-t-[2px]" data-aos="zoom-in">
            <div className="container mx-auto flex flex-col items-center lg:flex-col justify-between gap-y-6">
                <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
                    <div className="flex items-center justify-center mx-auto">
                        <img src={ProfileImg} alt="image" className="h-[80px] object-cover w-[80px] rounded-full" />
                    </div>
                    <p className="font-bold text-lg md:text-xl lg:text-xl mt-2 lg:mt-0">
                        Ali Asraf Shakil <span className="text-[#3498db]">Portfolio</span>
                    </p>
                </div>
                <div className="flex justify-evenly my-8 w-full">
                    <div className="mb-4 md:mb-0 text-center lg:mb-0 my-1">
                        <h3 className="text-xl font-bold lg:text-xl mb-2 uppercase">Explore More</h3>
                        <div className="flex flex-wrap text-center justify-center items-center gap-4 link text-[12px] md:text-sm lg:text-lg">{footerLinks}</div>
                    </div>
                    <div className="text-center my-1">
                        <h3 className="text-lg lg:text-xl mb-2 font-bold uppercase">Contact Me</h3>
                        <div className="flex justify-center items-center flex-wrap gap-4 link">{socialLinks}</div>
                    </div>
                </div>
            </div>



            <div className="text-center text-xs lg:text-sm mt-4">
                <p>Call us: +8801932018587</p>
                <p>Email: aliashrafshakil@gmail.com</p>
            </div>
            <div className="text-center text-xs lg:text-sm mt-4">
                <p>Location: Gobra, BSMRSTU, Gopalganj</p>
                <p>Dhaka, Bangladesh</p>
            </div>

            <div className="mt-4">
                <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={"aliashrafshakil@gmail.com"}
                        viewBox={`0 0 256 256`}
                    />
                </div>
            </div>

            <div className="text-center border-t-2 mt-6">
                <p className="mt-6 text-xs lg:text-sm">All Rights Reserved &copy; 2023-2026</p>
            </div>


        </footer>
    );
};

export default Footer;