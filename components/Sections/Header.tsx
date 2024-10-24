import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

export function Header() {
    return (
        <header>
            <Sheet>
                <SheetTrigger className="fixed top-8 left-4 z-50">
                    <Menu className="text-3xl text-white transition-all duration-700 hover:text-violet-500" />
                </SheetTrigger>
                
                <SheetContent className="bg-black text-white">
                    <SheetHeader className="space-y-4 mt-4">
                        <SheetTitle>
                            <a 
                                href="#home" 
                                className="text-lg block duration-700 transition-all hover:text-violet-500 cursor-pointer"
                            >
                                Home
                            </a>
                        </SheetTitle>

                        <SheetTitle>
                            <a 
                                href="#services" 
                                className="text-lg block duration-700 transition-all hover:text-violet-500 cursor-pointer"
                            >
                                Services
                            </a>
                        </SheetTitle>

                        <SheetTitle>
                            <a 
                                href="#about" 
                                className="text-lg block duration-700 transition-all hover:text-violet-500 cursor-pointer"
                            >
                                About
                            </a>
                        </SheetTitle>

                        <SheetTitle>
                            <a 
                                href="#testimonials" 
                                className="text-lg block duration-700 transition-all hover:text-violet-500 cursor-pointer"
                            >
                                Testimonials
                            </a>
                        </SheetTitle>

                        <SheetTitle>
                            <a 
                                href="#contact" 
                                className="text-lg block duration-700 transition-all hover:text-violet-500 cursor-pointer"
                            >
                                Contact
                            </a>
                        </SheetTitle>

                        <SheetDescription className="mt-4">Other pages</SheetDescription>
                        <SheetTitle>
                            <a href="/profile">Profile</a>
                        </SheetTitle>
                        <div className="flex justify-center mt-6 lg:mt-0 lg:justify-start gap-2">
                        <SheetTitle>
                            <Button className="duration-700 transition-all hover:scale-[1.1]">
                            <a 
                                href="/login" 
                                className="text-lg block cursor-pointer"
                            >
                                Log in
                            </a>
                            </Button>
                        </SheetTitle>

                        <SheetTitle>
                            <Button variant="ghost">
                            <a 
                                href="/register" 
                                className="text-lg block duration-700 transition-all hover:text-violet-500 cursor-pointer"
                            >
                                Register
                            </a>
                            </Button>
                        </SheetTitle>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </header>
    );
}
