import Image from "next/image"
import { Button } from "@/components/ui/button"

export default  function Secondsection() {
    return(
        <div className="px-20 py-32">
            <div className="flex flex-col items-center justify-center space-y-5">
                <span className="text-xs text-blue-600 font-bold">PROMOTIONS</span>
                <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-tight first:mt-0">Our Promotions Events</h2>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <div>
                        <Image src={"/event1.webp"} alt="" width={282} height={218}/>
                    </div>
                    <div>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">GET 30% Off</h3>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">USE PROMO CODE</p>
                        <Button>DINEWEEKENDSALE</Button>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <Image src={"/event2.webp"} alt="" width={282} height={362}/>
                    </div>
                    <div>
                        <Image src={"/event3.webp"} alt="" width={282} height={368}/>
                    </div>
                </div>
            </div>
        </div>
    )
}