import React from "react";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Info from "./Info/Info";
import MakeAppoinment from "./MakeAppoinment.js/MakeAppoinment";
import Services from "./Service/Services";
import Term from "./Term/Term";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Term></Term>
      <MakeAppoinment />
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
