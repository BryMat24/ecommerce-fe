import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="bg-[#2F2F2F] mt-[150px] rounded-lg px-8 py-12 relative">
                <h1 className="text-white font-bold text-4xl">
                    Ready to Get Our New Stuff?
                </h1>
                <div className="mt-9 relative w-[250px] bg-white rounded-3xl px-5 py-2 flex">
                    <input
                        className="text-[#8C8C8C] text-sm outline-none"
                        placeholder="Your email"
                    />
                    <div className="bg-black text-white absolute right-2 rounded-3xl top-1 px-3 py-1 text-sm">
                        Send
                    </div>
                </div>
                <div className="max-w-[400px] absolute right-10 bottom-10">
                    <p className="text-white">Dopes for Needs</p>
                    <p className="text-white font-thin text-sm mt-2">
                        We'll listen to your needs and provide you with the best
                        products. Upcoming kevin's tenga will soon be available!
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <div>
                    <p className="text-center">Connect With Us</p>
                    <div className="flex gap-5 items-center mt-3">
                        <ImFacebook2 className="w-[25px] h-[25px]" />
                        <FaSquareXTwitter className="w-[30px] h-[30px]" />
                        <FaInstagramSquare className="w-[30px] h-[30px]" />
                        <FaLinkedin className="w-[30px] h-[30px]" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
