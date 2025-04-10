import React from "react";
import logo from "../../../assets/logo.svg";
import arrow from "../../../assets/arrow-down.png";
import Hero from "../../../components/Hero/Hero";
import img1 from "../../../assets/tickerr/Figma.png";
import img2 from "../../../assets/tickerr/Tailwind.png";
import img3 from "../../../assets/tickerr/TS.png";
import img4 from "../../../assets/tickerr/React.png";
import img5 from "../../../assets/tickerr/Shadcn.png";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import IndustryExperience from "../IndustoryExperiance";
import Solutions from "../Solution";
import Visions from "../Visions";
import Stages from "../Stages";
import AboutUs from "../AboutUs";
import Services from "../Services";
import Testimonials from "../Testimonials";
import Page from "../../../components/Page";
const Home = () => {
  const navigate = useNavigate();

  const Ticker = ({ images }) => {
    return (
      <div className="max-w-full -mt-10 opacity-30 flex items-center justify-center flex-wrap overflow-hidden">
        <Marquee gradient={false} speed={80}>
          <div className="flex mt-[100px]">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`ticker-img-${index}`}
                className="h-[clamp(50px,8vw,70px)] mr-[clamp(40px,8vw,150px)] object-contain md:h-[clamp(50px,7vw,70px)] md:mr-20 sm:h-[clamp(40px,6vw,60px)] sm:mr-[50px] xs:h-[clamp(30px,5vw,45px)] xs:mr-[30px]"
              />
            ))}
          </div>
        </Marquee>
      </div>
    );
  };

  return (
    <Page>
      <Hero />
      <Ticker images={[img1, img2, img3, img4, img5]} />
      <Visions />
      <Solutions />
      <IndustryExperience />
      <Stages />
      <AboutUs />
      <Testimonials />
      <Services />
    </Page>
  );
};
export default Home;
