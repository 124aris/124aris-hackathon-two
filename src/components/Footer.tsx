import Image from "next/image"
import { Twitter, Facebook, Linkedin, Ghost } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export default function Footer() {
    return(
        <main>
            <div className="grid grid-cols-[30%,1fr,1fr,1fr] px-28 ml-6 pb-40 pt-16">
                <div className="flex flex-col space-y-10">
                    <Image src={"/Logo.webp"} alt="website logo" width={180} height={30}/>
                    <p className="font-normal text-base text-[#666]">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                    <div className="flex space-x-4">
                        <Button className="bg-[#f1f1f1] text-black rounded-lg hover:bg-[#f1f1f1] hover:text-black">
                            <Twitter className="fill-black w-5 h-5"/>
                        </Button>
                        <Button className="bg-[#f1f1f1] text-black rounded-lg hover:bg-[#f1f1f1] hover:text-black">
                            <Facebook className="fill-black w-5 h-5"/>
                        </Button>
                        <Button className="bg-[#f1f1f1] text-black rounded-lg hover:bg-[#f1f1f1] hover:text-black">
                            <Linkedin className="fill-black w-5 h-5"/>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 px-14">
                    <h3 className="font-bold text-xl text-[#666]">Company</h3>
                    <ul className="font-normal text-[#666] text-base space-y-3">
                        <li><Link href={""}>About</Link></li>
                        <li><Link href={""}>Terms of Use</Link></li>
                        <li><Link href={""}>Privacy Policy</Link></li>
                        <li><Link href={""}>How it Works</Link></li>
                        <li><Link href={""}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-5 px-14">
                    <h3 className="font-bold text-xl text-[#666]">Support</h3>
                    <ul className="font-normal text-[#666] text-base space-y-3">
                        <li><Link href={""}>Support Carrer</Link></li>
                        <li><Link href={""}>24h Service</Link></li>
                        <li><Link href={""}>Quick Chat</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-5 px-14">
                    <h3 className="font-bold text-xl text-[#666]">Contact</h3>
                    <ul className="font-normal text-[#666] text-base space-y-3">
                        <li><Link href={""}>Whatsapp</Link></li>
                        <li><Link href={""}>Support 24h</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-around items-center border-t border-[#666] p-8">
                <p className="font-normal text-base text-[#666]">Copyright © 2022 Dine Market</p>
                <p className="font-normal text-base text-[#666]">Design by. <span className="font-bold text-[#212121]">Weird Design Studio</span></p>
                <p className="font-normal text-base text-[#666]">Code by. <span className="font-bold text-[#212121]">124aris on github</span></p>
            </div>
        </main>
    )
}