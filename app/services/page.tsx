import FaqBox from "@components/home/FaqBox";
import CommercialServices from "@components/services/CommercialServices";
import EventsServices from "@components/services/EventsServices";
import HeaderServices from "@components/services/HeaderServices";
import PortraitServices from "@components/services/PortraitServices";


export default function ServicesPage() {
    return (
        <div className="home bg-dark03 uppercase">

            <HeaderServices />
            <PortraitServices />
            <EventsServices />
            <CommercialServices />
            <FaqBox />
        </div>
    );
}
