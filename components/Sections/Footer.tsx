import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Instagram, Twitter, User } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";


export function Footer() {
    return (
        <footer className="border border-t border-white/10 mt-60 lg:p-8 rounded-md">
            <div className="flex flex-col lg:flex-row justify-center text-center lg:text-start gap-12 lg:gap-0 items-center lg:justify-between p-8">
                <ul>
                    <h1 className="text-[25px] mb-6">Navigation</h1>
                    <li className="font-secondary"><a href="#Home" className="text-gray-600 transition-all duration-700 hover:text-violet-500 hover:underline">Home</a></li>
                    <li className="font-secondary"><a href="#about" className="text-gray-600 transition-all duration-700 hover:text-violet-500 hover:underline">About Us</a></li>
                    <li className="font-secondary"><a href="#services" className="text-gray-600 transition-all duration-700 hover:text-violet-500 hover:underline">Services</a></li>
                    <li className="font-secondary"><a href="#contact" className="text-gray-600 transition-all duration-700 hover:text-violet-500 hover:underline">Contact</a></li>
                    <li className="font-secondary"><a href="/login" className="text-gray-600 transition-all duration-700 hover:text-violet-500 hover:underline">Login</a></li>
                    <li className="font-secondary"><a href="/register" className="text-gray-600 transition-all duration-700 hover:text-violet-500 hover:underline">Register</a></li>
                </ul>
                <ul>
                    <h1 className="text-[25px] mb-6">Privacy Policy</h1>
                    <li className="font-secondary"><a href="#" className="text-gray-600 transition-all duration-700 hover:text-violet-500 hover:underline">Terms of Service</a></li>
                    <li className="font-secondary"><a href="#" className="text-gray-600 transition-all duration-700 hover:text-violet-500 hover:underline">Privacy Policy</a></li>
                    <li className="font-secondary"><a href="#" className="text-gray-600 transition-all duration-700 hover:text-violet-500 hover:underline">Cookie Policy</a></li>
                </ul>
                <ul className="flex flex-col items-center justify-center">
                    <h1 className="text-[25px] mb-6">Socials</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    <Instagram className="text-white hover:text-violet-500 duration-700 transition-all cursor-pointer" />
                    <FaTiktok className="text-white hover:text-violet-500 duration-700 transition-all cursor-pointer" />
                    <Twitter className="text-white hover:text-violet-500 duration-700 transition-all cursor-pointer" />
                    <FaWhatsapp size={25} className="text-white hover:text-violet-500 duration-700 transition-all cursor-pointer" />
                    <DiscordLogoIcon className="text-white hover:text-violet-500 duration-700 transition-all cursor-pointer size-7" />
                    </div>
                </ul>
            </div>
            <div className="border-t border-white/10 mt-10 mb-10 text-center">
                <HoverCard>
                    <div className="mt-12">
                    <HoverCardTrigger>created for @devgustavogantois</HoverCardTrigger>
                    </div>
                    <HoverCardContent>
                        <div className="flex justify-center items-center gap-6 mb-10">
                        <User className="text-violet-500" size={40} />
                        <p className="font-secondary font-medium text-gray-500">Gustavo Gantois Caria Carvalho</p>
                        </div>
                        <div className="font-secondary font-medium text-gray-500 text-left">
                            <p className="animate-bounce text-white hover:text-violet-500 duration-700 transition-all">Front-end Developer Jr.</p>
                            <p className="mt-12">
                            Technology enthusiast passionate about software development.
                            Follow me on social media!
                            @devgustavogantois
                            </p>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </footer>
    )
}