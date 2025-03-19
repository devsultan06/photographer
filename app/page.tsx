import About from "@components/home/About";
import Explore from "@components/home/Explore";
import FaqBox from "@components/home/FaqBox";
import Header from "@components/home/Header";
import Marque from "@components/home/Marque";
import Services from "@components/home/Services";
import Testimonials from "@components/home/Testimonials";

export default function Home() {
  return (
    <div className="home bg-dark03 uppercase">

      <Header />
      <Marque />
      <About />
      <Services />
      <Explore />
      <FaqBox />
      <Testimonials />
    </div>
  );
}
