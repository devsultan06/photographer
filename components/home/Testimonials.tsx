import { testimonial } from "@/data/testimonial";
import Socials from "@components/layout/Socials";
import ButtonWithArrow from "@components/ui/Button";
import CustomImage from "@components/ui/CustomImage";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";


const Testimonials = () => {
    return (
        <div className="relative">
            <div className="border-b border-dark12 ">
                <div className=" mb-[20px] px-[100px] max-900:px-[20px] max-900:block " >
                    <div>
                        <p className="text-grey40 text-[18px]">Testimonials</p>
                        <h1 className="text-[38px] max-900:mb-[10px] ">What My Clients Say</h1>
                    </div>


                </div>

                <div className="flex  items-center justify-between px-[100px] max-900:px-[20px] max-900:block pb-[30px]" >
                    <div>
                        <p className="text-grey40 text-[15px] capitalize">Total Reviews</p>
                        <h1 className="text-grey80 text-[20px] max-900:pb-[20px]">323</h1>
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
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[100px] max-900:px-[20px] pb-[100px] pt-[50px]">
                {testimonial.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-[#111] p-6 rounded-xl shadow-lg text-white relative overflow-hidden"
                    >
                        <CustomImage src="/images/shape1.png" alt="Hello" width={200} height={200} className="rounded-full absolute top-[-30px] right-[-50px] z-1 " />
                        <CustomImage src="/images/shape2.png" alt="Hello" width={200} height={200} className="rounded-full absolute bottom-[-30px] left-[-30px] z-1 " />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className=" text-grey90 capitalize">{testimonial.name}</h3>
                                    <p className="text-grey40 text-sm">{testimonial.location}</p>
                                </div>
                                <Socials/>
                            </div>


                            <div className="flex gap-1 my-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <span key={i} className="text-yellow-400">⭐</span>
                                ))}
                            </div>

                            <p className="text-gray-300 normal-case">
                                {testimonial.review.charAt(0).toUpperCase() + testimonial.review.slice(1).toLowerCase()}
                            </p>


                        </div>


                    </div>
                ))}
            </div>






        </div>
    )
}

export default Testimonials