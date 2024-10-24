import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export function Testimonials() {
    return (
        <section className="mb-20 lg:mb-32 px-4">
            <div>
                <h1 className="text-center text-[28px] sm:text-[35px] mb-10 sm:mb-20 mt-16 sm:mt-28">
                    What are they <span className="text-violet-500">Saying</span> about us?
                </h1>
            </div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="flex justify-center items-center flex-col px-4 lg:px-20">
                        <h1 className="text-lg sm:text-xl font-bold text-center text-violet-500 mb-6">Transforming Financial Management for Us!</h1>
                        <p className="font-secondary text-gray-600 text-center max-w-[280px] sm:max-w-[500px] lg:max-w-[700px]">
                            "With DashTech, we’ve streamlined our operations and gained better control over our finances. The real-time insights are invaluable for decision-making."
                            — Emily Johnson, CFO at FinCorp
                        </p>
                    </CarouselItem>

                    <CarouselItem className="flex justify-center items-center flex-col px-4 lg:px-20">
                        <h1 className="text-lg sm:text-xl font-bold text-center text-violet-500 mb-6">The Best Decision for Our Company’s Growth!</h1>
                        <p className="font-secondary text-gray-600 text-center max-w-[280px] sm:max-w-[500px] lg:max-w-[700px]">
                            "DashTech's platform allowed us to track transactions effortlessly, optimize our budget, and make data-driven decisions that helped grow our business."
                            — Michael Lee, CEO at TradeStar
                        </p>
                    </CarouselItem>

                    <CarouselItem className="flex justify-center items-center flex-col px-4 lg:px-20">
                        <h1 className="text-lg sm:text-xl font-bold text-center text-violet-500 mb-6">Empowering Our Financial Future!</h1>
                        <p className="font-secondary text-gray-600 text-center max-w-[280px] sm:max-w-[500px] lg:max-w-[700px]">
                            "DashTech gives us all the tools we need to analyze our financial health and stay ahead of the competition. It’s the most powerful platform we’ve used."
                            — Sarah Miller, Finance Manager at BlueWave Solutions
                        </p>
                    </CarouselItem>

                    <CarouselItem className="flex justify-center items-center flex-col px-4 lg:px-20">
                        <h1 className="text-lg sm:text-xl font-bold text-center text-violet-500 mb-6">Simplifying Our Daily Transactions!</h1>
                        <p className="font-secondary text-gray-600 text-center max-w-[280px] sm:max-w-[500px] lg:max-w-[700px]">
                            "Managing daily transactions used to be a hassle, but DashTech has made everything so much easier and more organized. Highly recommend!"
                            — Carlos Reyes, Operations Head at TechWorld
                        </p>
                    </CarouselItem>

                    <CarouselItem className="flex justify-center items-center flex-col px-4 lg:px-20">
                        <h1 className="text-lg sm:text-xl font-bold text-center text-violet-500 mb-6">Game-Changer for Our Business!</h1>
                        <p className="font-secondary text-gray-600 text-center max-w-[280px] sm:max-w-[500px] lg:max-w-[700px]">
                            "Since adopting DashTech, we’ve been able to improve profitability and optimize every aspect of our financial workflow. It’s truly a game-changer."
                            — Julia Sanders, Managing Director at Quantum Ventures
                        </p>
                    </CarouselItem>

                    <CarouselItem className="flex justify-center items-center flex-col px-4 lg:px-20">
                        <h1 className="text-lg sm:text-xl font-bold text-center text-violet-500 mb-6">Invaluable Insights, Exceptional Results!</h1>
                        <p className="font-secondary text-gray-600 text-center max-w-[280px] sm:max-w-[500px] lg:max-w-[900px] mt-4">
                            "The level of insight and precision DashTech offers has completely transformed how we view and manage our financial operations. It’s a must-have for any business."
                            — James Collins, CFO at Horizon Innovations
                        </p>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden lg:flex" />
                <CarouselNext className="hidden lg:flex" />
            </Carousel>
        </section>
    );
}
