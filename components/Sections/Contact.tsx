import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function Contact() {
    return (
        <section className="flex justify-center items-center flex-col">
            <h1 className="animate-bounce text-[35px]">Contact Us</h1>
            <Card className="p-4 lg:p-12">
                <CardTitle className="font-normal text-left">Leave a message to us</CardTitle>
                <CardDescription className="font-secondary mt-3">Talk to us directly, show us what we can improve within our platform</CardDescription>
                <CardContent>
                    <div className="mt-8 mb-8">
                    <label>Email</label>
                    <Input placeholder="Enter your email" name="email" id="email" type="text" required className="font-secondary" />
                    </div>
                    <div className="mt-8 mb-8">
                    <label>Name</label>
                    <Input placeholder="Enter your name" name="name" id="" type="text" required className="font-secondary" />
                    </div>
                    <div className="mt-8 mb-8">
                    <label>Phone</label>
                    <Input placeholder="Enter your phone" name="phone" id="phone" type="number" required className="font-secondary" />
                    </div>
                    <div className="mt-8 mb-8">
                    <label>Business Company</label>
                    <Input placeholder="Enter your Business Company" id="BCompany" name="BCompany" type="text" required className="font-secondary" />
                    </div>
                    <div className="mt-8 mb-8">
                        <Textarea placeholder="Type message here" className="font-secondary" />
                    </div>
                    <div className="mt-8">
                        <Button type="submit" variant="default">Send</Button>
                        
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

