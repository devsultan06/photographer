import CustomImage from "@components/ui/CustomImage"

const HeaderHome = () => {
    return (
        <div className="flex justify-between
    items-center max-900:block border-b border-dark12 ">
            <div className="px-[100px] max-900:px-[20px] max-900:pt-[30px] ">
                <p className="text-grey40 text-[18px]">Stunning Photography by</p>
                <h1 className="text-[42px] ">Damien Braun</h1>
            </div>

            <div className="max-900:hidden">
                <CustomImage src="/images/ripple.png" alt="Hero" width={300} height={100} />
            </div>

            <div className="px-[100px] max-900:px-[20px] max-900:py-[30px]">
                <div className="flex items-center gap-2">
                    <h1 className="text-[40px]">Let’s</h1>
                    <CustomImage src="/images/button.png" alt="Hero" width={80} height={100} />
                </div>
                <h1 className="text-[40px]">Work Together</h1>
            </div>
        </div>)
}

export default HeaderHome