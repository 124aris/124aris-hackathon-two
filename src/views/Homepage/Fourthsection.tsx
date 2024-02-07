import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import "@/styles/homepage.css"

export default function Fourthsection() {
    return (
        <main className="fourth-section">
            <div className="background-gradient">
                <div className="heading">
                    <h1 className="heading-text">Unique and Authentic Vintage Designer Jewellery</h1>
                </div>
            </div>
            <div className="background-color">
                <div className="outlines">
                    <div className="features">
                        <p className="background-text">Different from others</p>
                        <div className="feature-section">
                            <h3 className="feature">Using Good Quality Materials</h3>
                            <p className="text">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className="feature-section">
                            <h3 className="feature">100% Handmade Products</h3>
                            <p className="text">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className="feature-section">
                            <h3 className="feature">Modern Fashion Design</h3>
                            <p className="text">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className="feature-section">
                            <h3 className="feature">Discount for Bulk Orders</h3>
                            <p className="text">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="about">
                        <Image src={'/feature.webp'} alt="" width={300} height={350}/>
                        <div className="about-section">
                            <p className="text">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                            <Button className="about-button">
                                <Link href="/products" className="about-text">See All Product</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}