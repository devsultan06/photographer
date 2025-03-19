import ButtonWithArrow from "@components/ui/Button";
import CustomImage from "@components/ui/CustomImage";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const highlights = [
    "Coverage for weddings, parties, corporate functions, and more.",
    "Skilled photographers who know how to seize the moment.",
    "A mix of candid and posed shots for a comprehensive story.",
    "Quick turnaround for you to relive the day's highlights."
];

const Services = () => {
    return (
        <div className="relative">
            <div className="flex  items-center justify-between pb-[30px] mb-[50px] px-[100px] max-900:px-[20px] max-900:block border-b border-dark12" >
                <div>
                    <p className="text-grey40 text-[18px]">Services</p>
                    <h1 className="text-[40px] max-900:mb-[10px] ">My Photography Services</h1>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex gap-2 border border-dark12 px-2 py-1 rounded-[100px] 
                         max-900:absolute max-900:bottom-10 max-900:left-1/2 max-900:-translate-x-1/2">

                        <div className="bg-[url('/images/circle.png')] w-[45px] h-[45px] bg-cover flex justify-center items-center cursor-pointer">
                            <BiChevronLeft className="text-white text-3xl" />
                        </div>

                        <div className="bg-[url('/images/circle.png')] w-[45px] h-[45px] bg-cover flex justify-center items-center cursor-pointer">
                            <BiChevronRight className="text-white text-3xl" />
                        </div>

                    </div>

                    <ButtonWithArrow text="View All Services" />


                </div>

            </div>

            <div className="flex px-[100px] gap-5 pb-[100px] items-center flex-row-reverse max-900:block max-900:px-[20px]">
                <div className="flex-[2]">
                    <CustomImage src="/images/servicesh.png" alt="About" width={200} height={200} className="w-full" />
                </div>

                <div className="flex-[2] p-5 rounded-[25px] h-fit">
                    <div className="flex items-center gap-2">
                        <h1 className="text-[40px] text-grey50">Events</h1>
                        <CustomImage src="/images/button.png" alt="Hero" width={80} height={100} />
                    </div>
                    <p className="text-grey50 lowercase pb-[20px] leading-[2.2]">
                        <span className="uppercase">O</span>ur event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.
                    </p>


                    <div className="space-y-3">
                        <p className="text-grey80 capitalize mb-[10px]">Service Highlights</p>
                        {highlights.map((text, index) => (
                            <div key={index} className="flex items-center gap-3 border border-dark12 p-3 rounded-lg">
                                <div className="w-8 h-8 flex justify-center items-center border border-green-500">
                                    <CustomImage width={50} height={50} src="/images/star.png" alt="icon" className="w-full h-full object-cover" />
                                </div>
                                <p className="text-grey70">{text}</p>
                            </div>
                        ))}
                    </div>

                </div>


            </div>



        </div>
    )
}

export default Services