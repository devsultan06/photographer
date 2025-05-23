import About from "@components/home/About";
import Explore from "@components/home/Explore";
import FaqBox from "@components/home/FaqBox";
import HeaderHome from "@components/home/HeaderHome";
import Marque from "@components/layout/Marque";
import Services from "@components/home/Services";
import CustomImage from "@components/ui/CustomImage";

export default function Home() {
  return (
    <div className="home bg-dark03 uppercase">

      <HeaderHome />
      <Marque />
      <div className="pb-[100px]">
        <CustomImage src="/images/combo.png" alt="Ripple" width={2000} height={1000} className="w-[87%] mx-auto max-900:w-full max-900:p-5" />
      </div>
      <About />
      <Services />
      <Explore />
      <FaqBox />
    </div>
  );
}
