import { commercialprojects } from "@/data/projects";
import ProjectGallery from "@components/layout/ProjectGallery";
import ButtonWithArrow from "@components/ui/Button";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";



const Commercial = () => {
    return (
        <div className="relative max-900:mb-[40px]">
            <div className="flex  items-center justify-between pb-[20px] px-[100px] max-900:px-[20px] max-900:block " >
                <div>
                    <h1 className="text-[30px] max-900:text-[25px] max-900:mb-[10px] text-grey50">Commercial Photography</h1>
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



                </div>

            </div>

            <ProjectGallery projects={commercialprojects} />



        </div>
    )
}

export default Commercial