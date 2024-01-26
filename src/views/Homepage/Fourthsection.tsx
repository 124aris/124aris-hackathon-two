import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Fourthsection() {
    return (
        <main className="mb-32 mt-16">
            <div className=" bg-gradient-to-b from-white via-white to-[#FBFCFF]">
                <div className="px-36 flex justify-end font-bold text-[#212121] text-5xl">
                    <h1 className="basis-1/2">Unique and Authentic Vintage Designer Jewellery</h1>
                </div>
            </div>
            <div className="bg-[#FBFCFF] pb-16">
                <div className="grid grid-cols-2 items center pt-10 px-32">
                    <div className="grid grid-cols-2 justify-around items-center relative">
                        <p className="font-extrabold text-8xl absolute text-[#212121] opacity-5 z-10">Different from others</p>
                        <div className="flex flex-col mr-20 space-y-4 z-10">
                            <h3 className="font-semibold text-lg text-[#212121]">Using Good Quality Materials</h3>
                            <p className="font-light text-base text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className="flex flex-col mr-20 space-y-4 z-10">
                            <h3 className="font-semibold text-lg text-[#212121]">100% Handmade Products</h3>
                            <p className="font-light text-base text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className="flex flex-col mr-20 space-y-4 z-10">
                            <h3 className="font-semibold text-lg text-[#212121]">Modern Fashion Design</h3>
                            <p className="font-light text-base text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className="flex flex-col mr-20 space-y-4 z-10">
                            <h3 className="font-semibold text-lg text-[#212121]">Discount for Bulk Orders</h3>
                            <p className="font-light text-base text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <Image src={'/feature.webp'} alt="" width={300} height={350}/>
                        <div className="flex flex-col justify-center text-justify space-y-10 ml-10">
                            <p className="font-light text-base text-[#212121]">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                            <Button className="flex font-semibold text-sm rounded-none">
                                <Link href="/products" className="font-bold text-lg">See All Product</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}