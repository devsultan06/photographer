import Marquee from "react-fast-marquee";
import CustomImage from "@components/ui/CustomImage";

const data = [
    { id: 1, title: "Event Photography" },
    { id: 2, title: "Commercial Photography" },
    { id: 3, title: "Wedding Photography" },
    { id: 4, title: "Portrait Photography" },
    { id: 5, title: "Landscape Photography" },
    { id: 6, title: "Branding Photography" },
    { id: 7, title: "Product Photography" },
    { id: 8, title: "Fashion Photography" },
];

const Marque = () => {
    return (
        <div>
            <div className="p-5">
                <Marquee speed={70} gradient={false}>
                    {data.map((item) => (
                        <div key={item.id} className="flex items-center gap-2 mx-4">
                            <CustomImage src="/images/star.png" alt="Star" width={30} height={10} />
                            <h1 className="text-[18px] text-white">{item.title}</h1>
                        </div>
                    ))}
                </Marquee>
            </div>

            <div className="pb-[100px]">
                <CustomImage src="/images/combo.png" alt="Ripple" width={2000} height={1000} className="w-[87%] mx-auto max-900:w-full max-900:p-5" />
            </div>
        </div>


    );
};

export default Marque;
