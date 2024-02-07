"use client"
import React, {useState} from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import "@/styles/productpage.css"

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
    <main className="main-background">
      <div className="product-description">
        <div className="image">
          <div className="small-container">
            {Product[0].ProductPicture.map((picture, ind) => (
              <Image key={ind} src={picture} alt="" width={100} height={100} onMouseEnter={() => setIndex(ind)} className="small-image"/>              
            ))}
          </div>
          <div className="large-container">
              <Image src={Product[0].ProductPicture[0] && Product[0].ProductPicture[index]} alt="" width={590} height={1500}/>
          </div>
        </div>
        <div className="information">
          <div className="top">
            <h3 className="name">{Product[0].ProductName}</h3>
            <span className="type">{Product[0].ProductType}</span>
          </div>
          <div className="size-container">
            <p className="size">SELECT SIZE</p>
            <ul className="tag-container">
              <li className="tag">XS</li>
              <li className="tag">S</li>
              <li className="tag">M</li>
              <li className="tag">L</li>
              <li className="tag">XL</li>
            </ul>
          </div>
          <div className="quantity-container">
            <h4 className="quantity">Quantity:</h4>
            <div className="value">
              <Button onClick={decrement} className="button"><Minus/></Button>
              <span>{value}</span>
              <Button onClick={increment} className="button"><Plus/></Button>
            </div>
          </div>
          <div className="container">
            <Button className="cart-button"><ShoppingCart/>Add to Cart</Button>
            <p className="price">${Product[0].Price}.00</p>
          </div>
        </div>
      </div>
      <div className="product-overview">
        <div className="heading-container">
          <h2 className="heading">Product Information</h2>
          <p className="background">Overview</p>
        </div>
        <div className="sub-container">
          <h4 className="sub-heading">PRODUCT DETAILS</h4>
          <p className="text">{Product[0].ProductDetails}</p>
        </div>
        <div className="sub-container">
          <h4 className="sub-heading">PRODUCT CARE</h4>
          <ul className="list-container">
            {Product[0].ProductCare.map((list, indexx) => (
              <li key={indexx} className="list">{list}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom"></div>
    </main>
  )
}