import Image from "next/image"
import { Button } from "@/components/ui/button"
import "@/styles/homepage.css"

export default function Secondsection() {
    return(
        <div className="second-section">
            <div className="top">
                <span className="promotions">PROMOTIONS</span>
                <h2 className="promotions-headline">Our Promotions Events</h2>
            </div>
            <div className="bottom">
                <div className="left-part">
                    <div className="top-card">
                        <div className="card">
                            <h3 className="card-head">GET UP TO <span className="bold">60%</span></h3>
                            <p className="card-text">For the summer season</p>
                        </div>
                        <Image src={"/event1.webp"} alt="" width={282} height={218} className="card-image"/>
                    </div>
                    <div className="bottom-card">
                        <h3 className="head">GET 30% Off</h3>
                        <p className="content">USE PROMO CODE</p>
                        <Button variant="ghost" className="card-button">DINE WEEKEND SALE</Button>
                    </div>
                </div>
                <div className="right-part">
                    <div className="left-card">
                        <div className="information">
                            <p className="name">Flex Sweatshirt</p>
                            <div className="price">
                                <div className="position">
                                    <p className="old-price">$100.00</p>
                                    <div className="cut"></div>
                                </div>
                                <p className="new-price">$75.00</p>
                            </div>
                        </div>
                        <Image src={"/event2.webp"} alt="" width={282} height={368}/>
                    </div>
                    <div className="right-card">
                        <div className="card-content">
                            <p className="name">Flex Push Button Bomber</p>
                            <div className="price">
                                <div className="position">
                                    <p className="old-price">$225.00</p>
                                    <div className="cut"></div>
                                </div>
                                <p className="new-price">$190.00</p>
                            </div>
                        </div>
                        <Image src={"/event3.webp"} alt="" width={282} height={368}/>
                    </div>
                </div>
            </div>
        </div>
    )
}