import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Secondsection() {
    return(
        <div className=" py-28">
            <div className="flex flex-col items-center justify-center space-y-5">
                <span className="text-xs text-blue-600 font-bold">PROMOTIONS</span>
                <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-tight first:mt-0">Our Promotions Events</h2>
            </div>
            <div className="flex justify-center space-x-8 items-stretch py-7">
                <div className="flex flex-col basis-2/5 space-y-4">
                    <div className="flex bg-[#d6d6d8] justify-between items-center">
                        <div className="flex flex-col items-center justify-center ml-8">
                            <h3 className="text-3xl font-bold tracking-tight">GET UP TO <span className="text-4xl font-extrabold">60%</span></h3>
                            <p className="leading-7 font-normal text-lg">For the summer season</p>
                        </div>
                        <Image src={"/event1.webp"} alt="" width={282} height={218} className="mr-8"/>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-[#212121] text-white py-12 px-8">
                        <h3 className="text-4xl font-extrabold tracking-tight">GET 30% Off</h3>
                        <p className="leading-7 font-normal text-sm [&:not(:first-child)]:mt-4">USE PROMO CODE</p>
                        <Button variant="ghost" className="px-12 font-bold text-base bg-[#474747] text-white hover:bg-[#474747] hover:text-white">DINE WEEKEND SALE</Button>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="flex flex-col bg-[#efe1c7] justify-end">
                        <div className="ml-5 mb-4">
                            <p className="leading-7 [&:not(:first-child)]:mt-6">Flex Sweatshirt</p>
                            <div className="flex items-center">
                                <div className="relative">
                                    <p className="font-normal text-base">$100.00</p>
                                    <div className="absolute bottom-3 h-full w-full border-b border-black"></div>
                                </div>
                                <p className="text-lg font-semibold ml-2">$75.00</p>
                            </div>
                        </div>
                        <Image src={"/event2.webp"} alt="" width={282} height={368}/>
                    </div>
                    <div className="flex flex-col bg-[#d7d7d9] justify-end">
                        <div className="ml-5 mb-2">
                            <p className="leading-7 [&:not(:first-child)]:mt-6">Flex Push Button Bomber</p>
                            <div className="flex items-center">
                                <div className="relative">
                                    <p className="font-normal text-base">$225.00</p>
                                    <div className="absolute bottom-3 h-full w-full border-b border-black"></div>
                                </div>
                                <p className="text-lg font-semibold ml-2">$190.00</p>
                            </div>
                        </div>
                        <Image src={"/event3.webp"} alt="" width={282} height={368}/>
                    </div>
                </div>
            </div>
        </div>
    )
}