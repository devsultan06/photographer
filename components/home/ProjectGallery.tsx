import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import CustomImage from "@components/ui/CustomImage";

const projects = [
    {
        id: 1,
        title: "Faces of Resilience",
        date: "March 2022",
        image: "/images/pro1.png",
        link: "/projects/faces-of-resilience"
    },
    {
        id: 2,
        title: "A Wedding Tale",
        date: "January 2020",
        image: "/images/pro2.png",
        link: "/projects/a-wedding-tale"
    },
    {
        id: 3,
        title: "Product Elegance",
        date: "January 2020",
        image: "/images/pro3.png",
        link: "/projects/product-elegance"
    }
];


const ProjectGallery = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[100px] max-900:px-[20px] pb-[130px]">
            {projects.map((project) => (
                <div key={project.id} className="rounded-xl overflow-hidden">
                    <CustomImage width={200} height={200} src={project.image} alt={project.title} className="w-full h-[400px] object-cover" />
                    <div className="flex justify-between items-start py-4">
                        <div className="">
                            <h3 className="text-grey80 capitalize">{project.title}</h3>
                            <p className="text-grey50 capitalize">{project.date}</p>
                        </div>

                        <Link href={project.link} className="flex items-center gap-2 text-white mt-3">
                            VIEW PROJECT <FiArrowUpRight className="text-white" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectGallery;
