"use client"
import React, {useState} from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart } from 'lucide-react';

export default function Productpage(Product:{ ID: number; ProductName: string; ProductType: string; Price: number; ProductCategory: string; ProductDetails: string; ProductCare: string[]; ProductPicture: string[];}[]) {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState<number>(1)
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <main className="bg-[#FCFCFC]">
      <div className="flex px-20 justify-between pt-20">
        <div className="flex flex-2 gap-8">
          <div className="flex flex-col gap-4">
            {Product[0].ProductPicture.map((picture, ind) => (
              <Image key={ind} src={picture} alt="" width={100} height={100} onMouseEnter={() => setIndex(ind)} className="cursor-pointer"/>              
            ))}
          </div>
          <div className="w-4/5 h-full">
              <Image src={Product[0].ProductPicture[0] && Product[0].ProductPicture[index]} alt="" width={590} height={1500}/>
          </div>
        </div>
        <div>
          <div>
            <h3 className="font-normal text-3xl text-[#212121]">{Product[0].ProductName}</h3>
            <span className="font-semibold text-xl opacity-30">{Product[0].ProductType}</span>
          </div>
          <div>
            <p className="font-bold text-sm text-[#212121]">SELECT SIZE</p>
            <ul className="flex gap-4">
              <li className="flex font-bold w-2/5 h-2/5 justify-center items-center cursor-pointer rounded-full text-base text-[#666666] hover:shadow-md">XS</li>
              <li className="flex font-bold w-2/5 h-2/5 justify-center items-center cursor-pointer rounded-full text-base text-[#666666] hover:shadow-md">S</li>
              <li className="flex font-bold w-2/5 h-2/5 justify-center items-center cursor-pointer rounded-full text-base text-[#666666] hover:shadow-md">M</li>
              <li className="flex font-bold w-2/5 h-2/5 justify-center items-center cursor-pointer rounded-full text-base text-[#666666] hover:shadow-md">L</li>
              <li className="flex font-bold w-2/5 h-2/5 justify-center items-center cursor-pointer rounded-full text-base text-[#666666] hover:shadow-md">XL</li>
            </ul>
          </div>
          <div className="flex">
            <h4>Quantity:</h4>
            <div>
              <Button onClick={decrement}><Minus/></Button>
              <span>{value}</span>
              <Button onClick={increment}><Plus/></Button>
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
              <li key={indexx}>{list}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}