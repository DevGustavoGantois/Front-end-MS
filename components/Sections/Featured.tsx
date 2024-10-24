import Image from "next/image";

export function Featured() {
    return (
        <div className="mt-6 justify-center flex items-center">
            <Image src="/ImgLogos.svg" width={1200} height={200} quality={100} alt="" className="w-screen h-full"/>
        </div>  
    )
}