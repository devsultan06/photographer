import Socials from "@components/layout/Socials"
import CustomImage from "@components/ui/CustomImage"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"


const Form = () => {
    return (
        <div className="pb-[60px]  mb-[100px]">

            <div className="flex max-900:block items-center gap-10 px-[100px] max-900:px-[20px]">
                <div className="flex-[1] max-900:w-full">
                    <h1 className="text-[30px] max-900:text-[25px] mb-[30px] text-grey50">Send Me a Message</h1>
                    <p className="text-grey50 normal-case ">Have a specific inquiry or message for us? Please use the contact form below, and we'll get back to you promptly.</p>
                </div>

                <div className="flex-[2] ">
                    {/* <div className="flex gap-5 max-900:mt-[20px] max-900:block max-900:space-y-4">
                        <Link href="/" className="flex items-center gap-2 text-white">
                            +234-703-688-069 <FiArrowUpRight className="text-white" />
                        </Link>
                        <Link href="/" className="flex items-center gap-2 text-white lowercase">
                            sultanabaniks@gmail.com<FiArrowUpRight className="text-white" />
                        </Link>
                    </div> */}

                    

                </div>
            </div>



        </div>
    )
}

export default Form