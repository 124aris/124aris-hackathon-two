import Image from "next/image"
import { Twitter, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
    return(
        <main className="px-20">
            <div className="grid grid-cols-4">
                <div className="flex flex-col">
                    <Image src={"/Logo.webp"} alt="website logo" width={180} height={30}/>
                    <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                    <div className="flex">
                        <Twitter/>
                        <Facebook/>
                        <Linkedin/>
                    </div>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>How it Works</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h3>Support</h3>
                    <ul>
                        <li>Support Carrer</li>
                        <li>24h Service</li>
                        <li>Quick Chat</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Whatsapp</li>
                        <li>Support 24h</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <p>Copyright © 2022 Dine Market</p>
                <p>Design by. <span>Weird Design Studio</span></p>
                <p>Code by. <span>124aris on github</span></p>
            </div>
        </main>
    )
}