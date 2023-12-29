import Image from "next/image"
import { Button } from "@/components/ui/button"

export default  function Secondsection() {
    return(
        <div className="px-20 py-32">
            <div className="flex flex-col items-center justify-center space-y-5">
                <span className="text-xs text-blue-600 font-bold">PROMOTIONS</span>
                <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-tight first:mt-0">Our Promotions Events</h2>
            </div>
            <div className="flex justify-around items-center py-8">
                <div className="flex flex-col space-y-4">
                    <div className="flex bg-[#d6d6d8] justify-center items-center">
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">GET UP TO <span>60%</span></h3>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">For the summer season</p>
                        </div>
                        <Image src={"/event1.webp"} alt="" width={282} height={218}/>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-[#212121] text-white py-10 px-12">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">GET 30% Off</h3>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">USE PROMO CODE</p>
                        <Button variant="ghost" className="bg-[#474747] text-white hover:bg-[#474747] hover:text-white">DINE WEEKEND SALE</Button>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="bg-[#efe1c7]">
                        <p className="leading-7 [&:not(:first-child)]:mt-6">Flex Sweatshirt</p>
                        <span>$100.00</span>
                        <span>$75.00</span>
                        <Image src={"/event2.webp"} alt="" width={282} height={362}/>
                    </div>
                    <div className="bg-[#d7d7d9]">
                        <p className="leading-7 [&:not(:first-child)]:mt-6">Flex Push Button Bomber</p>
                        <span>$225.00</span>
                        <span>$190.00</span>
                        <Image src={"/event3.webp"} alt="" width={282} height={368}/>
                    </div>
                </div>
            </div>
        </div>
    )
}