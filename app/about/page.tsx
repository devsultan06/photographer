import HeaderAbout from "@components/about/HeaderAbout";
import Journey from "@components/about/Journey";
import Testimonials from "@components/layout/Testimonials";

export default function AboutPage() {
    return (
        <div className="home bg-dark03 uppercase">
            <HeaderAbout />
            <Journey />

        </div>
    );
}
