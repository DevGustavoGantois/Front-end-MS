import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
    return (
       <section className="max-w-[1280px] mx-auto">
        <div className="flex flex-col justify-center items-center mt-8">
            <Image src="/Logo.svg" quality={100} width={300} height={300} alt="" className="animate-pulse" />
            <h1 className="lg:text-[40px]">Register your Company</h1>
            </div>
         <form className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="flex flex-col gap-2 mt-16 lg:mt-24">
                <label htmlFor="companyName">Company name</label>
                <Input placeholder="Enter your company name" name="Company_name" className="font-secondary" type="text" required />
                <label htmlFor="cnpj">CNPJ/CPF</label>
                <Input placeholder="Enter your CPF or CNPJ" name="CNPJ" className="font-secondary" type="number" required />
                <div className="flex flex-col gap-2 mt-4 lg:m-4">
                <label htmlFor="adress">Adress</label>
                <Input placeholder="Adress" name="adrress" id="adress" type="text" className="font-secondary" required />
                <Input placeholder="City" name="city" id="city" type="text" className="font-secondary" required />
                <Input placeholder="State" name="state" id="state" type="text" className="font-secondary" required />
                <Input placeholder="CEP" name="cep" id="cep" type="text" className="font-secondary" required />
                </div>
            </div>
            <div className="mt-6 lg:mt-24 gap-3 flex flex-col">
                <label htmlFor="phone">Phone Number</label>
                <Input type="tel" placeholder="Enter your phone number" name="phone" id="phone" className="font-secondary" required />
                <label htmlFor="fullname">Full Name</label>
                <Input type="text" placeholder="Enter your Full name" name="fullname" id="fullname" className="font-secondary" required />
                <label htmlFor="email">E-mail</label>
                <Input type="email" placeholder="Enter your email" name="email" id="email" className="font-secondary" required />
            </div>
            <div className="mt-6 lg:mt-24 gap-3 flex flex-col">
            <label htmlFor="password">Password</label>
                <Input type="password" placeholder="Enter your password" name="password" id="password" className="font-secondary" required />
                <label htmlFor="confirmpassword">Confirm Password</label>
                <Input type="password" placeholder="Confirm your password" name="confirmpassword" id="confirmpassword" className="font-secondary" required />
                <label htmlFor="jobTitle">Job Title</label>
                <Input type="text" id="JobTitle" name="jobTitle" placeholder="Enter your Job Title" className="font-secondary" />
            </div>
        </form>
        <div className="flex items-center justify-center gap-2 font-secondary mt-10">
                <Checkbox />
                <span>Accept terms and conditions</span>
            </div>
            <div className="flex justify-center items-center gap-2 mb-20">
            <Button type="submit" className="mt-4">Register</Button>
            <Button variant="ghost" type="submit" className="mt-4">
                <Link href="/login">Log in</Link>
            </Button>
            </div>
            <Pagination className="flex justify-center max-w-[1920px] mx-auto mt-12 mb-12">
                <PaginationContent className="flex gap-12 items-center">
                    <PaginationItem>
                        <PaginationPrevious href="/login" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/">Start</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="/login" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
       </section>
    )
}