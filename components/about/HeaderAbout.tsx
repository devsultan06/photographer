import { stats } from "@/data/stats"
import CustomImage from "@components/ui/CustomImage"

const HeaderAbout = () => {
    return (
        <div className="px-[100px] max-900:px-[20px] pb-[60px]">
            <div className="relative pt-[50px] max-900:block border-b border-dark12" >
                <div className="hidden max-900:block">
                    <CustomImage src="/images/aboutcont2.png" alt="Ripple" width={300} height={100} className=" w-full" />
                </div>
                <div className="absolute max-900:relative max-900:mt-[30px] ">
                    <p className="text-grey40 text-[18px]">About</p>
                    <h1 className="text-[38px] max-900:mb-[10px] ">About damien braun</h1>
                </div>
                <div className="pb-[100px] max-900:hidden">
                    <CustomImage src="/images/aboutcont.png" alt="Ripple" width={2000} height={1000} className="w-[100%] mx-auto max-900:w-full max-900:p-5" />
                </div>

                <div className="max-900:relative  max-900:top-0 max-900:w-full absolute top-[150px] left-0 right-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6 max-900:px-[0px]">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-dark06 text-white border-dark12 border rounded-lg p-4 text-left">
                            <h2 className="text-2xl font-bold">{stat.value}</h2>
                            <p className="text-grey50 capitalize text-[15px]">{stat.label}</p>
                        </div>
                    ))}
                </div>

            </div>

            <div className="py-[50px] border-b border-dark12">
                <h1 className="text-grey50 pb-[20px] text-[25px]">My Biography</h1>
                <p className="text-grey50 lowercase text-[15px]"> <span className="uppercase">D</span>amien Braun's love affair with photography began at a young age, nurtured by the captivating landscapes and vibrant cultures surrounding her in the heart of the USA. Her passion for storytelling through imagery led her to embark on a photography journey that has spanned over 15 years.</p>
                <p className="text-grey50 lowercase text-[15px]"> <span className="uppercase">D</span>riven by an insatiable curiosity to explore the beauty in everyday moments, Damien has honed her craft meticulously. Her background in digital media provided her with a solid foundation, but it's her keen eye for detail and an innate ability to capture raw emotions that truly set her apart.</p>
                <p className="text-grey50 lowercase text-[15px]"> <span className="uppercase">D</span>amien's journey is more than just taking pictures; it's about capturing the essence of the human spirit, the fleeting magic of nature, and the emotions that define our lives. With each click of her camera, she weaves stories that transcend time and space.</p>

            </div>
        </div>
    )
}

export default HeaderAbout