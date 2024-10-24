import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function EditProfile() {
    return (
        <section className="p-6 lg:p-12">
            <header>
                <h1 className="text-[35px] text-center lg:text-start font-bold mb-6">
                    Edit your profile
                </h1>
            </header>
            <main className="grid grid-cols-1 gap-8">
                <div className="flex flex-col items-center lg:items-start">
                    <div className="relative w-40 h-40 lg:w-64 lg:h-64 mb-6">
                        <img 
                            src="https://github.com/DevGustavoGantois.png" 
                            alt="Profile Picture" 
                            className="rounded-full shadow-lg" 
                        />
                    </div>
                    <h1 className="text-2xl font-semibold text-violet-500 mb-2">Gustavo Gantois</h1>
                    <p className="text-gray-600">Frontend Developer</p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                        <Input 
                            id="name" 
                            placeholder="Your full name" 
                            type="text" 
                            className="w-full font-secondary "
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <Input 
                            id="email" 
                            placeholder="Your email" 
                            type="email" 
                            className="w-full font-secondary "
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <Input 
                            id="password" 
                            placeholder="Your new password" 
                            type="password" 
                            className="w-full font-secondary "
                        />
                    </div>
                    <div>
                        <label htmlFor="bio" className="block text-gray-700 font-semibold mb-2">Bio</label>
                        <Textarea 
                            id="bio" 
                            placeholder="Write a short bio..." 
                            className=" font-secondary w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                            rows={4}
                        ></Textarea>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <Button>
                            Save Changes
                        </Button>
                    </div>
                </div>
            </main>
            <Pagination className="flex justify-center lg:justify-end max-w-[1920px] mx-auto mt-8 mb-12">
                <PaginationContent className="flex gap-12 lg:gap-28 items-center">
                    <PaginationItem>
                        <PaginationPrevious href="/login" />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="/transactions" className="w-[50px] hidden lg:flex">Transactions Companys</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/">Home</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="hidden lg:flex">
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="/transactions" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </section>
    );
}