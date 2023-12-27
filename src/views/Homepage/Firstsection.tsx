import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default  function Firstsetion() {
    return(
        <div className="grid grid-cols-[40%,60%] mt-5 ml-20 mr-18">
            <div className="flex flex-col justify-center space-y-8">
                <div className="flex">
                    <span className="flex bg-[#e1edff] text-blue-700 font-bold px-6 py-2 rounded-md">Sale 70%</span>
                </div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">An Industrial Take on Streetwear</h1>
                <p className="text-lg text-muted-foreground">
                Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                <div>
                    <Button className="space-x-4 not rounded-none py-10 px-7">
                        <ShoppingCart/>
                        <Link href="/products" className="font-bold text-lg">Start Shopping</Link>
                    </Button>
                </div>
                <div className="grid grid-cols-4">
                    <Image src={"/Bazar.webp"} alt="" width={100} height={35} />
                    <Image src={"/Bustle.webp"} alt="" width={100} height={35} />
                    <Image src={"/Versace.webp"} alt="" width={100} height={35} />
                    <Image src={"/Instyle.webp"} alt="" width={100} height={35} />
                </div>
            </div>
            <div className="flex items-center justify-center ">
                <div className="w-600 h-600 rounded-full bg-[#ffece3]">
                <Image src={"/Homepage.webp"} alt="" width={650} height={650}/>
                </div>
            </div>
        </div>
    );
};

