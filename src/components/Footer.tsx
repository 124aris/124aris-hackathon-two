import Image from "next/image"
import { Twitter, Facebook, Linkedin, Ghost } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import "@/styles/footer.css"

export default function Footer() {
    return(
        <main>
            <div className="footer-top-section">
                <div className="left">
                    <Image src={"/logo.webp"} alt="website logo" width={180} height={30}/>
                    <p className="description">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                    <div className="social-buttons">
                        <Button className="button">
                            <Twitter className="logo"/>
                        </Button>
                        <Button className="button">
                            <Facebook className="logo"/>
                        </Button>
                        <Button className="button">
                            <Linkedin className="logo"/>
                        </Button>
                    </div>
                </div>
                <div className="right-sections">
                    <h3 className="headings">Company</h3>
                    <ul className="list">
                        <li><Link href={""}>About</Link></li>
                        <li><Link href={""}>Terms of Use</Link></li>
                        <li><Link href={""}>Privacy Policy</Link></li>
                        <li><Link href={""}>How it Works</Link></li>
                        <li><Link href={""}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="right-sections">
                    <h3 className="headings">Support</h3>
                    <ul className="list">
                        <li><Link href={""}>Support Carrer</Link></li>
                        <li><Link href={""}>24h Service</Link></li>
                        <li><Link href={""}>Quick Chat</Link></li>
                    </ul>
                </div>
                <div className="right-sections">
                    <h3 className="headings">Contact</h3>
                    <ul className="list">
                        <li><Link href={""}>Whatsapp</Link></li>
                        <li><Link href={""}>Support 24h</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom-section">
                <p className="text">Copyright © 2022 Dine Market</p>
                <p className="text">Design by. <span className="bold">Weird Design Studio</span></p>
                <p className="text">Code by. <span className="bold">124aris on github</span></p>
            </div>
        </main>
    )
}