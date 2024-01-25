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
    <main className="bg-[#FCFCFC] mt-8">
      <div className="flex px-32 justify-normal pt-16">
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
            <h3 className="font-normal text-3xl text-[#212121] pt-16">{Product[0].ProductName}</h3>
            <span className="font-semibold text-xl opacity-30">{Product[0].ProductType}</span>
          </div>
          <div>
            <p className="font-bold text-sm text-[#212121] pt-8">SELECT SIZE</p>
            <ul className="flex gap-4 py-4">
              <li className="flex font-bold w-10 h-10 justify-center items-center cursor-pointer rounded-full text-base text-[#666666] hover:shadow-md">XS</li>
              <li className="flex font-bold w-10 h-10 justify-center items-center cursor-pointer rounded-full text-base text-[#666666] hover:shadow-md">S</li>
              <li className="flex font-bold w-10 h-10 justify-center items-center cursor-pointer rounded-full text-base text-[#666666] hover:shadow-md">M</li>
              <li className="flex font-bold w-10 h-10 justify-center items-center cursor-pointer rounded-full text-base text-[#666666] hover:shadow-md">L</li>
              <li className="flex font-bold w-10 h-10 justify-center items-center cursor-pointer rounded-full text-base text-[#666666] hover:shadow-md">XL</li>
            </ul>
          </div>
          <div className="flex gap-8 items-center pt-4">
            <h4 className="font-extrabold text-base text-[#212121]">Quantity:</h4>
            <div className="flex items-center space-x-2.5">
              <Button onClick={decrement} className="p-2 rounded-full border-solid border-[#F1F1F1] bg-[#F1F1F1] text-gray-600 hover:bg-[#F1F1F1]"><Minus/></Button>
              <span>{value}</span>
              <Button onClick={increment} className="p-2 rounded-full border-solid border-[#F1F1F1] bg-[#F1F1F1] text-gray-600 hover:bg-[#F1F1F1]"><Plus/></Button>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-8">
            <Button className="rounded-none"><ShoppingCart/>Add to Cart</Button>
            <p className="font-bold text-2xl text-[#212121]">${Product[0].Price}.00</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-32 justify-center bg-white mt-16 gap-8 px-16 pt-8 pb-24">
        <div className="flex items-center relative w-full h-40 border-b-2 border-[#C4C4C4]">
          <h2 className="mt-8 font-bold text-2xl leading-6 tracking-wide text-[#212121] pb-12 absolute top-2/4 transform -translate-y-2/4 z-10">Product Information</h2>
          <p className="mt-28 font-extrabold text-9xl leading-9 text-[#f2f3f7] opacity-70 absolute z-0 w-full h-full">Overview</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold text-base leading-5 tracking-wide text-[#666666]">PRODUCT DETAILS</h4>
          <p className="basis-2/3 font-light text-base leading-6 text-justify tracking-wide text-[#212121]">{Product[0].ProductDetails}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold text-base leading-5 tracking-wide text-[#666666]">PRODUCT CARE</h4>
          <ul className="basis-2/3 ml-6 list-disc">
            {Product[0].ProductCare.map((list, indexx) => (
              <li key={indexx} className="font-semibold list-inside text-base leading-6 text-justify tracking-wide text-[#212121]">{list}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-8"></div>
    </main>
  )
}