"use client"
import React, { useState, useEffect } from 'react';
import ProductsList from "@/Products/Productslist"
import Link from 'next/link';
import Image from 'next/image';

export default function Thirdsection() {
//    const [itemsToShow, setItemsToShow] = useState<Array<typeof ItemsList[0]>>([]);

//    useEffect(() => {
//        const updateItemsToShow = () => {
//            const screenWidth = window.innerWidth;
//            let itemsPerRow = 3;
//            if (screenWidth <= 768) {
//                itemsPerRow = 1;
//            } else if (screenWidth <= 1024) {
//                itemsPerRow = 2;
//            }
//            const itemsToDisplay = ItemsList.slice(0, itemsPerRow);
//            setItemsToShow(itemsToDisplay);
//        };
//        updateItemsToShow();
//        window.addEventListener('resize', updateItemsToShow);
//        return () => {
//            window.removeEventListener('resize', updateItemsToShow);
//        };
//    }, []);
    
    return(
        <div>
            <div className="flex flex-col items-center justify-center space-y-5">
                <span className="text-xs text-blue-600 font-bold">PRODUCTS</span>
                <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-tight first:mt-0">Check What We Have</h2>
            </div>
            <div className='flex ml-20 mr-20 mt-14'>
                <div>
                    <Link href={''}>
                        <Image src={ProductsList[0].ProductPicture1} alt='' width={380} height={400}/>
                        <div className='text-lg font-semibold text-[#212121] mt-3'>
                            <p>{ProductsList[0].ProductName}</p>
                            <p>${ProductsList[0].Price}</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href={''}>
                        <Image src={ProductsList[1].ProductPicture1} alt='' width={380} height={400}/>
                        <div className='text-lg font-semibold text-[#212121] mt-3'>
                            <p>{ProductsList[1].ProductName}</p>
                            <p>${ProductsList[1].Price}</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href={''}>
                        <Image src={ProductsList[2].ProductPicture1} alt='' width={380} height={400}/>
                        <div className='text-lg font-semibold text-[#212121] mt-3'>
                            <p>{ProductsList[2].ProductName}</p>
                            <p>${ProductsList[2].Price}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}