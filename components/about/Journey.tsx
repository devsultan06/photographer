import { timelineData } from "@/data/timelineData";
import CustomImage from "@components/ui/CustomImage";



const Journey = () => {
    return (
        <div className="pb-[100px] pt-[60px] px-[100px] max-900:px-[20px]" >
            <div className=" border-b border-dark12">
                <p className="text-grey50 text-[18px]">Journey</p>
                <h1 className="text-[38px] pb-[40px] ">Damien's Journey - A Timeline</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[50px]">


                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#111] p-6 rounded-xl shadow-lg text-white relative overflow-hidden">
                        <CustomImage src="/images/shape1.png" alt="Hello" width={200} height={200} className="rounded-full absolute top-[-30px] right-[-20px] z-1 " />
                        <CustomImage src="/images/shape2.png" alt="Hello" width={200} height={200} className="rounded-full absolute bottom-[-20px] left-[-20px] z-1 " />

                        <div className="relative z-10">
                            <h2 className="text-2xl text-grey50 font-bold">YEAR - {item.year}</h2>
                            <p className="text-grey50 mt-2 normal-case"> {item.description.charAt(0).toUpperCase() + item.description.slice(1).toLowerCase()}</p>
                        </div>

                    </div>
                ))}
            </div>



        </div>
    )
}

export default Journey