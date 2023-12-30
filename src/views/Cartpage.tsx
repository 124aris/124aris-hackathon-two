import { ShoppingBag } from "lucide-react"

export default function Cartpage() {
    return (
        <main className="px-20">
            <h2 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight py-24 ml-12">Shopping Cart</h2>
            <div className="flex flex-col justify-center items-center mt-8">
                <ShoppingBag className="w-32 h-32"/>
                <h1 className="scroll-m-20 text-3xl font-bold tracking-tight mt-2">Your shopping bag is empty</h1>
            </div>
        </main>
    )
}                                                         