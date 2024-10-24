import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Globe } from "lucide-react";

export function Services() {
    return (
        <section>
            <div className="items-center mt-40 mb-12 lg:mt-20 lg:mb-20 justify-center flex flex-col animate-bounce">
                <h1 className="text-[25px]">How can we <span className="text-violet-500">help</span> you?</h1>
            </div>
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="p-2 lg:p-6 w-full h-full">
            <CardHeader>
                <div className="relative">
                <CardTitle className="font-medium text-[20px]">Interactive Dashboard for Your Company</CardTitle>
                <Globe className="absolute -right-6 -top-2 lg:-left-8 lg:-top-4 transform -translate-y-1/2 text-violet-500 animate-pulse" />
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-sm font-secondary">
                    Gain real-time insights into your business performance with our user-friendly dashboard. Track key metrics, visualize data, and make informed decisions to drive growth.
                </CardDescription>
            </CardContent>
        </Card>

        <Card className="p-2 lg:p-6 w-full h-full">
            <CardHeader>
                <div className="relative">
                <CardTitle className="font-medium text-[20px]">Annual Access and 24/7 Support</CardTitle>
                <Globe className="absolute -right-6 -top-2 lg:-left-8 lg:-top-4 transform -translate-y-1/2 text-violet-500 animate-pulse" />
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-sm font-secondary">
                    Enjoy uninterrupted access to our platform year-round. Our dedicated support team is available 24/7 to assist you with any queries or technical issues, ensuring your operations run smoothly.
                </CardDescription>
            </CardContent>
        </Card>

        <Card className="p-2 lg:p-6 w-full h-full">
            <CardHeader>
                <div className="relative">
                    <CardTitle className="font-medium text-[20px]">Comprehensive Transaction List for Your Business</CardTitle>
                    <Globe className="absolute -right-6 -top-2 lg:-left-8 lg:-top-4 transform -translate-y-1/2 text-violet-500 animate-pulse" />
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-sm font-secondary">
                    Easily manage and review all transactions within your business. Our organized and searchable transaction list helps you keep track of financial activities and improve accountability.
                </CardDescription>
            </CardContent>
        </Card>

        <Card className="p-2 lg:p-6 w-full h-full">
            <CardHeader>
                <div className="relative">
                <CardTitle className="font-medium text-[20px]">Customizable Reporting Tools</CardTitle>
                <Globe className="absolute -right-6 -top-2 lg:-left-8 lg:-top-4 transform -translate-y-1/2 text-violet-500 animate-pulse" />
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-sm font-secondary">
                    Tailor reports to fit your specific needs with our customizable reporting tools. Generate insights into sales, expenses, and customer behavior to better strategize your business operations.
                </CardDescription>
            </CardContent>
        </Card>
            </div>
        </section>
    )
}