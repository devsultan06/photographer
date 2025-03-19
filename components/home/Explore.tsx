import ButtonWithArrow from "@components/ui/Button";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ProjectGallery from "./ProjectGallery";



const Explore = () => {
    return (
        <div className="relative">
            <div className="flex  items-center justify-between pb-[30px] mb-[50px] px-[100px] max-900:px-[20px] max-900:block border-b border-dark12" >
                <div>
                    <p className="text-grey40 text-[18px]">Portfolio</p>
                    <h1 className="text-[38px] max-900:mb-[10px] ">Explore My photography work.</h1>
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

            <ProjectGallery />



        </div>
    )
}

export default Explore