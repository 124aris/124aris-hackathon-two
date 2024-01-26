import InputWithButton from "@/components/InputButton"

export default function Fifthsection() {
    return (
        <main className="flex justify-center items-center flex-col pt-20 pb-40 relative">
            <p className="font-extrabold text-9xl leading-9 text-[#f2f3f7] absolute z-0">Newsletter</p>
            <div className="z-10">  
                <h1 className="text-4xl font-bold text-[#212121] mb-4">Subscribe Our Newsletter</h1>
                <p className="font-light text-base text-[#212121] mb-8">Get the latest information and promo offers directly</p>
                <InputWithButton/>
            </div>
        </main>
    )
}