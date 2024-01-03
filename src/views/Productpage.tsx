"use client"
import React, {useState} from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart } from 'lucide-react';

export default function Productpage(Product:{ ID: number; ProductName: string; ProductType: string; Price: number; ProductCategory: string; ProductDetails: string; ProductCare: string[]; ProductPicture: string[];}[]) {
  const [index, setIndex] = useState(0);

  return (
    <main>
      <div className="flex px-20">
        <div className="flex">
          <div className="flex flex-col cursor-pointer">
            {Product[0].ProductPicture.map((picture, ind) => (
              <Image key={ind} src={picture} alt="" width={100} height={100} onMouseEnter={() => setIndex(ind)}/>              
            ))}
          </div>
          <div>
              <Image src={Product[0].ProductPicture[0] && Product[0].ProductPicture[index]} alt="" width={200} height={200}/>
          </div>
        </div>
        <div>
          <div>
            <h3>{Product[0].ProductName}</h3>
            <span>{Product[0].ProductType}</span>
          </div>
          <div>
            <p>SELECT SIZE</p>
            <ul className="flex">
              <li>XS</li>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
            </ul>
          </div>
          <div className="flex">
            <h4>Quantity:</h4>
            <div>
              <Button><Minus/></Button>
              <span>0</span>
              <Button><Plus/></Button>
            </div>
          </div>
          <div className="flex">
            <Button><ShoppingCart/>Add to Cart</Button>
            <p>${Product[0].Price}.00</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>Product Information</h2>
        </div>
        <div className="flex">
          <h4>PRODUCT DETAILS</h4>
          <p>{Product[0].ProductDetails}</p>
        </div>
        <div className="flex">
          <h4>PRODUCT CARE</h4>
          <ul className="ml-6 list-disc">
            {Product[0].ProductCare.map((list, indexx) => (
              <li key={indexx} >{list}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}