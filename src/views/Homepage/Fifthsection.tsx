import InputWithButton from "@/components/InputButton"
import "@/styles/homepage.css"

export default function Fifthsection() {
    return (
        <main className="fifth-section">
            <p className="background-newsletter">Newsletter</p>
            <div className="newsletter-container">  
                <h1 className="newsletter">Subscribe Our Newsletter</h1>
                <p className="newsletter-text">Get the latest information and promo offers directly</p>
                <InputWithButton/>
            </div>
        </main>
    )
}