import { Input } from "@/components/ui/input";
import Image from "next/image";
import {User2Icon, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Link from "next/link";

export default function Login() {
    return (
        <section className="flex flex-col gap-3 justify-center mt-8 lg:mt-32 items-center">
            <div>
                <Image src="/Logo.svg" width={300} height={300} quality={100} alt="" className="animate-pulse"/>
            </div>
            <div className="mt-1">
                <h1 className="font-bold text-[30px]">log-in</h1>
            </div>
            <form className="flex flex-col mt-10 gap-2">
                <label className="text-center" htmlFor="">Enter your name</label>
                <div className="relative font-secondary">
                <Input
                id="username"
                name="username"
                placeholder="Enter your username"
                className="pl-10" 
                type="text"
                />
                <User2Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                </div>
                <label className="text-center mt-3">Enter your password</label>
                <div className="relative font-secondary">
                <Input placeholder="Enter your password"
                name="password"
                id="password"
                className="pl-10" 
                type="password"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                </div>
            </form>
            <Link href="/register">
            <span className="text-right mt-4 text-gray-500 hover:text-violet-500 transition-all duration-300 cursor-pointer font-secondary">Forgot your account?</span>
            </Link>
            <div className="mt-2">
                <Button className="w-[220px]">
                    <Link href="/dashboard">Login</Link>
                </Button>
            </div>
            <div className="mt-20">
            <Pagination className="flex justify-end  mt-12 mb-12">
                <PaginationContent className="flex gap-12 items-center">
                    <PaginationItem>
                        <PaginationPrevious href="/" />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="/register">Register</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/">Start</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="/register" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            </div>
        </section>
    )
}