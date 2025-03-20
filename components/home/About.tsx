import Socials from "@components/layout/Socials";
import ButtonWithArrow from "@components/ui/Button";
import CustomImage from "@components/ui/CustomImage";
const About = () => {
    return (
        <div>
            <div className="flex items-center justify-between pb-[30px] mb-[50px] px-[100px] max-900:px-[20px] max-900:block border-b border-dark12" >
                <div>
                    <p className="text-grey40 text-[18px]">About</p>
                    <h1 className="text-[38px] max-900:mb-[10px] ">I am Damien</h1>
                </div>
                <ButtonWithArrow text="Know More" />

            </div>

            <div className="flex px-[100px] gap-5 pb-[100px] items-center max-900:block max-900:px-[20px]">
                <div className="flex-[2]">
                    <CustomImage src="/images/about.png" alt="About" width={200} height={200} className="w-full" />
                </div>

                <div className="flex-[2] border border-dark12 p-5 rounded-[25px] h-fit max-900:mt-[20px]">
                    <div className="flex items-center  gap-2 pb-[20px]">
                        <CustomImage src="/images/star2.png" alt="Ripple" width={30} height={100} />
                        <p className="text-grey80  capitalize text-[22px]">Introduction</p>
                    </div>
                    <p className="text-grey70 lowercase pb-[20px] leading-[2.2] border-b border-dark12">
                        <span className="uppercase">M</span>y journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.
                    </p>


                    <div className="flex items-center  gap-2 pb-[20px] mt-[20px]">
                        <CustomImage src="/images/star2.png" alt="Ripple" width={30} height={100} />
                        <p className="text-grey80  capitalize text-[22px]">Contact Information</p>
                    </div>
                    <div className="flex gap-7 max-900:block">
                        <div className="max-900:mb-[20px]">
                            <p className="text-grey80  capitalize text-[18px] ">Email</p>
                            <p className="text-grey70 lowercase">sultanabaniks@gmail.com</p>
                        </div>

                        <div>
                            <p className="text-grey80  capitalize text-[18px]">Phone Number</p>
                            <p className="text-grey70 lowercase">1234567890</p>
                        </div>

                    </div>

                    <div className="flex items-center justify-between mt-[20px] max-900:block ">

                        <Socials />
                        <div className="flex gap-3 max-900:flex-col max-900:w-full">
                            <ButtonWithArrow text="Let's Work" showArrow={false} className="max-900:w-full max-900:flex-1" />
                            <ButtonWithArrow text="Download CV" showArrow={false} className="max-900:w-full max-900:flex-1" />
                        </div>

                    </div>




                </div>
            </div>
        </div>
    )
}

export default About