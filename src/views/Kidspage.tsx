import ProductsList from "@/utils/Productslist"
import Link from "next/link"
import Image from "next/image"
import "@/styles/productscategory.css"

export default function Kidspage() {
    const kidsProducts = ProductsList.filter(
        (product) => product.ProductCategory === "Kids"
      );

    return(
        <main className="category-page">
            <div className="alignment">
                {kidsProducts.map(product => (
                    <div key={product.ID} className="card">
                    <Link href={`/product/${product.ProductName.replace(/\s+/g, '-')}`}>
                        <div className="content">
                            <Image src={product.ProductPicture[0]} alt={product.ProductName} width={250} height={270}/>
                            <p className='name'>{product.ProductName}</p>
                            <p className="type">{product.ProductType}</p>
                            <p className='price'>${product.Price}</p>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}