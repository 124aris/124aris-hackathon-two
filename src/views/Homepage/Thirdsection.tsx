import Productsswiper from '@/components/Slider';
import "@/styles/homepage.css"

export default function Thirdsection() { 
    return(
        <div className='third-section'>
            <div className="swiper-container">
                <span className="products">PRODUCTS</span>
                <h2 className="swiper-text">Check What We Have</h2>
            </div>
            <Productsswiper/>
        </div>
    )
}