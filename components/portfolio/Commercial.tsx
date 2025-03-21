import { commercialprojects } from "@/data/projects";
import ProjectGallery from "@components/layout/ProjectGallery";



const Commercial = () => {
    return (
        <div className="relative mb-[40px]">
            <div className="pb-[20px] px-[100px] max-900:px-[20px] max-900:block " >
                <div>
                    <h1 className="text-[30px] max-900:text-[25px] max-900:mb-[10px] text-grey50">Commercial Photography</h1>
                </div>
               

            </div>

            <ProjectGallery projects={commercialprojects} />



        </div>
    )
}

export default Commercial