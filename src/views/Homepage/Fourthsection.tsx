import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Fourthsection() {
    return (
        <main className="px-20">
            <div className="px-2 flex justify-end items-center font-bold text-[#212121] text-5xl">
                <h1 className="basis-1/2">Unique and Authentic Vintage Designer Jewellery</h1>
            </div>
            <div className="grid grid-cols-2">
                <div className="grid grid-cols-2">
                    <div>
                        <h3>Using Good Quality Materials</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <h3>100% Handmade Products</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <h3>Modern Fashion Design</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <h3>Discount for Bulk Orders</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="flex">
                    <Image src={'/feature.webp'} alt="" width={300} height={350}/>
                    <div>
                        <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                        <Button className="rounded-none">
                            <Link href="/products" className="font-bold text-lg">See All Product</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}