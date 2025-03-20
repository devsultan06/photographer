import Marquee from "react-fast-marquee";
import CustomImage from "@components/ui/CustomImage";
import { marquedata } from "@/data/marquedata";


const Marque = () => {
    return (
        <div>
            <div className="p-5">
                <Marquee speed={70} gradient={false}>
                    {marquedata.map((item) => (
                        <div key={item.id} className="flex items-center gap-2 mx-4">
                            <CustomImage src="/images/star.png" alt="Star" width={30} height={10} />
                            <h1 className="text-[18px] text-white">{item.title}</h1>
                        </div>
                    ))}
                </Marquee>
            </div>

           
        </div>


    );
};

export default Marque;
