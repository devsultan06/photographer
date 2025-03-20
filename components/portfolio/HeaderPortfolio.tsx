import CustomImage from "@components/ui/CustomImage"

import Marquee from "react-fast-marquee";

const BrandsMarquee = () => {
    return (
        <div className="bg-dark06 py-4  ">
            <Marquee gradient={false} speed={70} pauseOnHover>
                <CustomImage src="/images/brand1.png" alt="Brand" width={200} height={100} className="w-[200px] mx-4" />
                <CustomImage src="/images/brand2.png" alt="Brand" width={200} height={100} className="w-[200px] mx-4" />
                <CustomImage src="/images/brand3.png" alt="Brand" width={200} height={100} className="w-[200px] mx-4" />
                <CustomImage src="/images/brand4.png" alt="Brand" width={200} height={100} className="w-[200px] mx-4" />
                <CustomImage src="/images/brand5.png" alt="Brand" width={200} height={100} className="w-[200px] mx-4" />
            </Marquee>
        </div>
    );
};



const HeaderPortfolio = () => {
    return (
        <div className="pb-[60px]">
            <div className="relative pt-[50px] max-900:block px-[100px] max-900:px-[20px] " >
                <div className="hidden max-900:block">
                    <CustomImage src="/images/headerportmobile.png" alt="Ripple" width={300} height={100} className=" w-full" />
                </div>
                <div className="absolute max-900:relative mt-[40px] w-[62%] max-900:w-full">
                    <p className="text-grey40 text-[18px]">Portfolio</p>
                    <h1 className="text-[38px] mb-[20px] ">Visual Poetry in Pixels</h1>
                    <p className="text-grey50 normal-case text-[15px]">Step into a visual journey that encapsulates the essence of my lens. Each photograph in this portfolio is a narrative, a frozen moment in time, and a testament to the artistry and passion poured into every frame. Explore the diverse tapestry of stories I've had the privilege to capture and witness the world through my lens.</p>
                </div>
                <div className="pb-[80px] max-900:hidden">
                    <CustomImage src="/images/headport.png" alt="Ripple" width={2000} height={1000} className="w-[100%] mx-auto max-900:w-full max-900:p-5" />
                </div>

            </div>

            <div className="text-center mb-[10px] max-900:mt-[50px] ">
                <p className="text-grey50">BRANDS i hAVE wORKED wITH</p>
            </div>
            <div className=" pb-[60px] ">
                <BrandsMarquee />

            </div>


        </div>
    )
}

export default HeaderPortfolio