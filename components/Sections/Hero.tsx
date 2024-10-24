import Image from "next/image";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export function Hero() {
    return (
        <section>
            <div className="flex justify-center mt-12 mb-8">
            <Image src="/Logo.svg" alt="" width={500} height={500} quality={100} className="animate-pulse" />
            </div>
            <h1 className="text-center text-[20px] lg:text-[45px]"><span className="text-violet-500">Supercharge Your Business</span>: Manage Finances Effortlessly with Our Control Website</h1>
            <p className="text-gray-400 font-secondary text-center mt-6">Let me know if you’d like more options or any adjustments</p>
            <div className="flex justify-center mt-12">
            <div className="relative w-[300px] lg:w-[800px] h-full">
            <Input type="search" placeholder="Search Financy Companies" className="pl-2 font-secondary" />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            </div>
            <figure className="mt-12 justify-center flex items-center transition-all duration-700 hover:scale-[1.1] cursor-pointer">
                <Image src="/HeroImage.svg" quality={100} width={1100} height={500} alt="" className="float" />
            </figure>
        </section>
    )
}