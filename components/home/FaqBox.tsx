import ButtonWithArrow from "@components/ui/Button";
import Faq from "./Faq";

const FaqBox = () => {
    return (
        <div>
            <div className="pb-[30px] mb-[50px] px-[100px] max-900:px-[20px]  border-b border-dark12" >
                <div>
                    <p className="text-grey40 text-[18px]">FAQ's</p>
                    <h1 className="text-[38px] max-900:mb-[10px] ">Frequently Asked Questions</h1>
                </div>

            </div>

            <Faq />


        </div>
    )
}

export default FaqBox