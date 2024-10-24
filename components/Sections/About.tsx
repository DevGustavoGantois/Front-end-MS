import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function About() {
    return (
        <section>
            <div className="flex flex-col justify-center lg:gap-64 lg:flex-row lg:justify-around">
                <article className="mt-12">
                    <h1 className="text-center lg:text-start text-[35px] mb-10 lg:mb-2">
                        Empowering Financial Growth with <span className="text-violet-500 animate-pulse">DashTech</span>
                    </h1>
                    <p className="text-center mb-12 lg:mb-8 lg:text-start lg:w-[500px] text-gray-500 font-secondary">
                        At DashTech, we revolutionize financial management by offering businesses a robust platform to track, analyze, and optimize their financial operations. Our cutting-edge tools empower companies to make data-driven decisions, streamline transactions, and maximize profitability. Whether you're managing daily transactions or long-term investments, DashTech provides the insights and precision you need to drive your business forward.
                    </p>
                    <div className="flex justify-center lg:justify-start gap-4">
                        <Button>
                            Explore More
                        </Button>
                        <Button variant="secondary">
                            <Link href="/login">
                            Access Platform
                            </Link>
                        </Button>
                    </div>
                </article>
                <figure>
                    <Image src="/ImgAbout.svg" width={700} height={500} quality={100} alt="" className="float" />
                </figure>
            </div>
        </section>
    );
}