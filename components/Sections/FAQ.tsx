import { AccordionItem } from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionTrigger } from "../ui/accordion";

export function FAQ() {
    return (
        <section className="flex flex-col justify-center items-center gap-10 mb-40">
            <div className="mt-40 mb-10">
                <h1 className="text-[35px]">Frequently <span className="text-violet-500">asked questions</span></h1>
            </div>
            <div>
                <Accordion type="single" collapsible  className="mb-6">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-white duration-700 transition-all hover:text-violet-500">What is DashTech and how can it benefit my business?</AccordionTrigger>
                        <AccordionContent className="text-gray-300 lg:w-[600px] font-secondary font-light">
                        DashTech is a financial management platform designed to help businesses track, analyze, 
                        and optimize their financial operations. It provides tools for managing transactions, 
                        creating financial reports, and offering insights to support data-driven decision-making. 
                        Whether you're a small business or a large 
                        enterprise, DashTech helps streamline financial processes and increase profitability.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="mb-6">
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-white duration-700 transition-all hover:text-violet-500">What features does DashTech offer to streamline financial management?</AccordionTrigger>
                        <AccordionContent className="text-gray-300 lg:w-[600px] font-secondary font-light">
                        DashTech offers a range of features, including automated transaction tracking, 
                        customizable financial reports, real-time analytics, 
                        and secure integrations with popular accounting software. 
                        Additionally, it provides tools for budgeting, cash flow forecasting, and expense management, 
                        all designed to improve financial efficiency and accuracy.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="mb-6">
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-white duration-700 transition-all hover:text-violet-500">Is DashTech secure for managing sensitive financial data?</AccordionTrigger>
                        <AccordionContent className="text-gray-300 lg:w-[600px] font-secondary font-light">
                        Yes, DashTech prioritizes the security of your financial data. We use industry-standard 
                        encryption, multi-factor authentication, and regular security audits to ensure that 
                        all your financial information is stored and transmitted securely. 
                        Your data privacy and protection are our top priorities.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="mb-6">
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-white duration-700 transition-all hover:text-violet-500">How can I get started with DashTech?</AccordionTrigger>
                        <AccordionContent className="text-gray-300 lg:w-[600px] font-secondary font-light">
                        Getting started with DashTech is simple. Sign up for an account, 
                        complete the onboarding process, 
                        and begin by connecting your business’s financial data. 
                        DashTech’s intuitive interface will guide you through setting up your dashboard, 
                        so you can start managing your financial operations right away. 
                        Our support team is also available to assist you at any step.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}