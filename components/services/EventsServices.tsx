import { eventssessions} from "@/data/services";
import CustomImage from "@components/ui/CustomImage";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";




const EventsServices = () => {
    return (
        <div className="relative mb-[40px] border-b border-dark12">
            <div className=" pb-[50px] px-[100px] max-900:px-[20px] max-900:block flex gap-[20px] items-center " >
                <div className="flex-[1]">
                    <h1 className="text-[30px] max-900:text-[25px] mb-[30px] text-grey50">Events Photography</h1>
                    <p className="text-grey50 normal-case">Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.</p>
                    <Link href="./" className="flex items-center gap-2 text-white mt-[30px] max-900:mb-[40px]">
                        VIEW PROJECT <FiArrowUpRight className="text-white" />
                    </Link>

                </div>

                <div className="flex-[1]">
                    <CustomImage src="/images/eventserv.png" alt="Ripple" width={300} height={100} className=" w-full" />
                </div>


            </div>

            <div className="container  px-[100px] max-900:px-[20px] ">
                {eventssessions.map((session, index) => (
                    <div key={index} className=" border-b border-dark12 py-[50px]">
                        <div className="flex gap-[20px] items-center max-900:block">
                            <div className="flex-[1] max-900:pb-[30px]">
                                <h2 className="text-[18px] text-grey80 capitalize">{session.name}</h2>
                                <div className="flex items-center gap-8 max-900:justify-between">
                                    <p className="text-[30px] text-grey80">${session.price}</p>
                                    <Link href="/" className="flex items-center gap-2 text-white">
                                        BOOK A CALL <FiArrowUpRight className="text-white" />
                                    </Link>

                                </div>
                            </div>

                            <ul className="text-sm space-y-2 flex-[2]">
                                {session.description.map((item, i) => (
                                    <div key={index} className="flex items-center gap-3 border border-dark12 p-3 rounded-lg">
                                        <div className="w-8 h-8 flex justify-center items-center border border-green-500">
                                            <CustomImage width={50} height={50} src="/images/star.png" alt="icon" className="w-full h-full object-cover" />
                                        </div>
                                        <p className="text-grey70">{item}</p>
                                    </div>
                                ))}
                            </ul>
                        </div>


                    </div>
                ))}
            </div>


        </div>
    )
}

export default EventsServices