import Banner from "../../features/Banner";
import CtaBanner from "../../features/CtaBanner";
import Faq from "../../features/Faq";
import OurServices from "../../features/OurServices";
import Testimonial from "../../features/Testimonial";
import WhyUs from "../../features/WhyUs";

const Home = () => {
  return (
    <>
      <Banner />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <CtaBanner />
      <Faq />
    </>
  );
};
export default Home;
