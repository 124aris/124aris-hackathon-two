"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import "@/styles/header.css"

export default function Header() {
  return (
    <nav className="header">
        <Link href="/">
            <Image src={"/logo.webp"} alt="website logo" width={140} height={25}/>
        </Link>
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <div className="routes">
                        <NavigationMenuItem >
                            <Link href="/female" legacyBehavior passHref>
                                <NavigationMenuLink>Female</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/male" legacyBehavior passHref>
                                <NavigationMenuLink>Male</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/kids" legacyBehavior passHref>
                                <NavigationMenuLink>Kids</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/products" legacyBehavior passHref>
                                <NavigationMenuLink>All Products</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
        <div className="input-search">
            <Search className="search"/>
            <Input type="text" placeholder="What you're looking for" className="input"/>
        </div>
        <div className="fullcart">
            <div className="cart">
                <Link href={"/cart"}>
                    <ShoppingCart />
                    <span className="number">0</span>
                </Link>
            </div>
        </div>
    </nav>
    )
}