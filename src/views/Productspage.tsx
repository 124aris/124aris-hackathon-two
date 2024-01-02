import ProductsList from "@/products/Productslist"
import Link from "next/link"
import Image from "next/image"

export default function Productspage() {
    return(
        <main className="mt-12">
            <div className="grid grid-cols-4 ml-20">
                {ProductsList.map(product => (
                    <div key={product.ID} className=" mb-16">
                    <Link href={`/product/${product.ProductName.replace(/\s+/g, '-')}`}>
                        <div className="flex flex-col">
                            <Image src={product.ProductPicture1} alt={product.ProductName} width={250} height={270}/>
                            <p className='text-lg font-semibold text-[#212121] mt-2'>{product.ProductName}</p>
                            <p className="text-base font-semibold text-[#888] mb-2 mt-1">{product.ProductType}</p>
                            <p className='text-xl font-semibold text-[#212121]'>${product.Price}</p>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}