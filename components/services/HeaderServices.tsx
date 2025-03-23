import CustomImage from "@components/ui/CustomImage"


const HeaderServices = () => {
    return (
        <div className="pb-[60px] border-b border-dark12 mb-[100px]">
            <div className="relative pt-[50px] max-900:block px-[100px] max-900:px-[20px] " >
                <div className="hidden max-900:block">
                    <CustomImage src="/images/servicesmob.png" alt="Ripple" width={300} height={100} className=" w-full" />
                </div>
                <div className="absolute left-[300px] max-900:left-0 max-900:relative mt-[20px] w-[70%] max-900:w-full">
                    <p className="text-grey40 text-[18px]">Services</p>
                    <h1 className="text-[38px] mb-[20px] ">Diverse Photography Offerings</h1>
                    <p className="text-grey50 normal-case text-[15px]">Unlock the full spectrum of professional photography services tailored to your vision. From timeless portraits to captivating event coverage, I bring a unique blend of creativity and technical expertise to each project.</p>
                </div>
                <div className="pb-[10px] max-900:hidden">
                    <CustomImage src="/images/servicespc.png" alt="Ripple" width={2000} height={1000} className="w-[100%] mx-auto max-900:w-full max-900:p-5" />
                </div>

            </div>



        </div>
    )
}

export default HeaderServices