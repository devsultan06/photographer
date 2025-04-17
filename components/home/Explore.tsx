import ButtonWithArrow from "@components/ui/Button";
import ProjectGallery from "../layout/ProjectGallery";
import { projects } from "@/data/projects";



const Explore = () => {
    return (
        <div className="relative">
            <div className="flex  items-center justify-between pb-[30px] mb-[50px] px-[100px] max-900:px-[20px] max-900:block border-b border-dark12" >
                <div>
                    <p className="text-grey40 text-[18px]">Portfolio</p>
                    <h1 className="text-[38px] max-900:mb-[10px] ">Explore My photography work.</h1>
                </div>
                <div className="flex items-center gap-5">
                   

                    <ButtonWithArrow text="View All Services" />


                </div>

            </div>

            <ProjectGallery projects={projects} />



        </div>
    )
}

export default Explore