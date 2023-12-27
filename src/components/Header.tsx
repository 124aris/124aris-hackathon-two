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

export default function Header() {
  return (
    <nav className="flex justify-between items-center h-20 px-20">
        <Link href="/">
            <Image src={"/Logo.webp"} alt="website logo" width={140} height={25} />
        </Link>
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <div className="flex space-x-14 justify-between font-semibold">
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
        <div className="flex border border-input bg-background items-center">
            <Search className="bg-white rounded-l" />
            <Input type="text" placeholder="What you looking for" className="rounded-r" />
        </div>
        <div className=" flex p-2 rounded-full relative bg-gray-200">
            <Link href={"/cart"}>
                <ShoppingCart />
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">0</span>
            </Link>
        </div>
    </nav>
    )
}