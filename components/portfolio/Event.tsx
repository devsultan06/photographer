import { eventprojects } from "@/data/projects";
import ProjectGallery from "@components/layout/ProjectGallery";



const Event = () => {
    return (
        <div className="relative mb-[40px] border-b border-dark12">
            <div className=" pb-[20px] px-[100px] max-900:px-[20px] max-900:block " >
                <div>
                    <h1 className="text-[30px] max-900:text-[25px] max-900:mb-[10px] text-grey50">Events Photography</h1>
                </div>
                
            </div>

            <ProjectGallery projects={eventprojects} />



        </div>
    )
}

export default Event