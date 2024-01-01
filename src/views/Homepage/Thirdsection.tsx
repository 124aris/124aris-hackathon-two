import Productsswiper from '@/components/Slider';

export default function Thirdsection() { 
    return(
        <div>
            <div className="flex flex-col items-center justify-center space-y-5">
                <span className="text-xs text-blue-600 font-bold">PRODUCTS</span>
                <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-tight first:mt-0">Check What We Have</h2>
            </div>
            <Productsswiper/>
        </div>
    )
}