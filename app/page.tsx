import About from "@components/home/About";
import Header from "@components/home/Header";
import Marque from "@components/home/Marque";
import Services from "@components/home/Services";

export default function Home() {
  return (
    <div className="home bg-dark06 uppercase">

      <Header />
      <Marque />
      <About />
      <Services />
    </div>
  );
}
