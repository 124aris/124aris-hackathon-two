import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import "@/styles/homepage.css"

export default function Firstsection() {
    return(
        <div className="first-section">
            <div className="left-side">
                <div className="sale-container">
                    <span className="sale">Sale 70%</span>
                </div>
                <h1 className="headline">An Industrial Take on Streetwear</h1>
                <p className="headline-text">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                <div className="button-container">
                    <Button className="button">
                        <ShoppingCart/>
                        <Link href="/products" className="button-text">Start Shopping</Link>
                    </Button>
                </div>
                <div className="images">
                    <Image src={"/Bazar.webp"} alt="" width={100} height={35}/>
                    <Image src={"/Bustle.webp"} alt="" width={100} height={35}/>
                    <Image src={"/Versace.webp"} alt="" width={100} height={35}/>
                    <Image src={"/Instyle.webp"} alt="" width={100} height={35}/>
                </div>
            </div>
            <div className="right-side">
                <div className="background-circle">
                    <Image src={"/Homepage.webp"} alt="" width={650} height={650}/>
                </div>
            </div>
        </div>
    );
}