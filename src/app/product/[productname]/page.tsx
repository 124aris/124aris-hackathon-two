import React, {useState} from "react";
import ProductsList from "@/products/Productslist";
import Image from "next/image";

export async function generateStaticParams() {
  return ProductsList.map((product) => ({
    productname: product.ProductName.replace(/\s+/g, '-'),
  }));
}

export default function Page({ params }: { params: { productname: string } }) {
  const Product = ProductsList.filter(
    (product) => product.ProductName.replace(/\s+/g, '-') === `${params.productname}`
  );
  const [index, setIndex] = useState(0);

  return (
    <main>
      <div className="px-20">
        <div className="flex">
          <div className="flex flex-col">
            {Product[0].ProductPicture.map((picture, ind) => (
              <Image key={ind} src={picture} alt="" width={100} height={100} onMouseEnter={() => setIndex(ind)}/>              
            ))}
          </div>
          <div className="w-80 h-full">
              <Image src={Product[0].ProductPicture[0] && Product[0].ProductPicture[index]} alt="" className="w-full h-full"/>
          </div>
        </div>
      </div>
    </main>
  );
}