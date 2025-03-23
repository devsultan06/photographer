import Socials from "@components/layout/Socials"
import CustomImage from "@components/ui/CustomImage"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"


const HeaderContact = () => {
    return (
        <div className="pb-[60px]  mb-[100px]">
            <div className="relative pt-[50px] pb-[30px] max-900:block border-b border-dark12 px-[100px] max-900:px-[20px] " >
                <div className="hidden max-900:block max-900:relative">
                    <CustomImage src="/images/contactmob.png" alt="Ripple" width={300} height={100} className=" w-full" />
                </div>
                <div className="absolute max-900:relative max-900:mt-[50px] mt-[180px] w-[60%] max-900:w-full">
                    <p className="text-grey40 text-[18px]">Contact Me</p>
                    <h1 className="text-[38px] mb-[20px] ">Get in Touch with Me</h1>
                    <p className="text-grey50 normal-case text-[15px]">Step into a world of timeless photography with Damien Braun. Explore our range of photography services, each crafted to tell your unique story through captivating images. Whether it's the magic of portraits, the emotion of events, or the allure of commercial photography, we're here to bring your vision to life.</p>
                </div>
                <div className="pb-[10px] max-900:hidden">
                    <CustomImage src="/images/contactbg.png" alt="Ripple" width={2000} height={1000} className="w-[100%] mx-auto max-900:w-full max-900:p-5" />
                </div>

                <div className="absolute right-[120px] max-700:mt-[-800px] max-900:mb-[300px] mt-[-540px] max-900:relative max-900:right-[0px] max-900:mx-auto max-900:flex max-900:gap-[20px] max-900:justify-center max-900:mt-[-390px]">
                    <Socials />

                </div>


            </div>

            <div className="flex max-900:block items-center gap-10 py-[50px] px-[100px] max-900:px-[20px] border-b border-t border-dark12 ">
                <div className="flex-[1] max-900:w-full">
                    <h1 className="text-[30px] max-900:text-[25px] mb-[30px] text-grey50">Contact Information</h1>
                    <p className="text-grey50 normal-case ">Feel free to reach out to us through various channels. We are available by phone, email, and social media for your convenience.</p>
                </div>

                <div className="flex-[2] ">
                    <div className="flex gap-5 max-900:mt-[20px] max-900:block max-900:space-y-4">
                        <Link href="/" className="flex items-center gap-2 text-white">
                            +234-703-688-069 <FiArrowUpRight className="text-white" />
                        </Link>
                        <Link href="/" className="flex items-center gap-2 text-white lowercase">
                            sultanabaniks@gmail.com<FiArrowUpRight className="text-white" />
                        </Link>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default HeaderContact