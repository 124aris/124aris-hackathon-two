import { ShoppingBag } from "lucide-react"
import "@/styles/cartpage.css"

export default function Cartpage() {
    return (
        <main className="main-cart">
            <h2 className="heading">Shopping Cart</h2>
            <div className="message">
                <ShoppingBag className="icon"/>
                <h1 className="sentence">Your shopping bag is empty</h1>
            </div>
        </main>
    )
}                                                         