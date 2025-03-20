import FaqBox from "@components/home/FaqBox";
import Commercial from "@components/portfolio/Commercial";
import Event from "@components/portfolio/Event";
import HeaderPortfolio from "@components/portfolio/HeaderPortfolio";
import Portrait from "@components/portfolio/Portrait";


export default function ServicesPage() {
    return (
        <div className="home bg-dark03 uppercase">

            <HeaderPortfolio />
            <Portrait />
            <Event />
            <Commercial />
            <FaqBox />
        </div>
    );
}
