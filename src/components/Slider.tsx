"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import ProductsList from '@/utils/Productslist';
import Image  from 'next/image';
import Link from 'next/link';
import "@/styles/slider.css"

export default function Productsswiper() {
    return (
        <div className='main-slider'>
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
            >
                {ProductsList?.map(product => (
                    <SwiperSlide key={product.ID}>
                        <Link href={`/product/${product.ProductName.replace(/\s+/g, '-')}`}>
                            <div className="card">
                                <Image src={product.ProductPicture[0]} alt='' width={380} height={400}/>
                                <div className='text'>
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