"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import ProductsList from '@/products/Productslist';
import Image  from 'next/image';
import Link from 'next/link';

export default function Productsswiper() {
    return (
        <div className='px-20'>
            <Swiper
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 100
                    },
                    1000: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    },
                    1260: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    }
                }}
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={3}
                className="relative"
            >
                {ProductsList?.map(product => (
                    <SwiperSlide key={product.ID}>
                        <Link href={`/product/${product.ProductName}`}>
                            <div className="py-8 transform-gpu hover:scale-110 transition-transform duration-500 ease-in-out">
                                <Image src={product.ProductPicture1} alt='' width={380} height={400}/>
                                <div className='hover:ml-4 text-lg font-semibold text-[#212121] mt-3'>
                                    <p>{product.ProductName}</p>
                                    <p>${product.Price}</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}