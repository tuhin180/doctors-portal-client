import React from "react";
import footer from "../../../assets/images/footer.png";
const Footer = () => {
  return (
    <section
      className="mt-10"
      style={{ backgroundImage: `url(${footer})`, backgroundSize: "cover" }}
    >
      <div>
        <div className="flex  flex-col justify-between p-16 lg:flex-row ">
          <div>
            <h1 className="text-lg font-bold uppercase text-slate-400 mt-4">
              Our Services
            </h1>
            <ul>
              <li>Emergency Checkup</li>
              <li>Monthly Checkup</li>
              <li>Weekly Checkup</li>
              <li>Deep Checkup</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold uppercase text-slate-400 mt-4">
              Oral health
            </h1>
            <ul>
              <li>Fluride Treatment</li>
              <li>Cavity Fillings</li>
              <li>Teeth Whitening</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold uppercase text-slate-400 mt-4">
              Our Address
            </h1>
            <ul>
              <li>Khanpura ,Babugonj,Barishal</li>
            </ul>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center">
          Copyright 2022 All Rights Reserved
        </h1>
      </div>
    </section>
  );
};

export default Footer;
