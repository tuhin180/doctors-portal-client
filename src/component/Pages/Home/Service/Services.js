import React from "react";
import ServiceCard from "./ServiceCard";
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      img: fluoride,
      description:
        " Lorem Ipsum is simply dummy printing and typesetting indust Ipsumhas been the",
    },
    {
      id: 2,
      name: "Cavity Filling",
      img: cavity,
      description:
        " Lorem Ipsum is simply dummy printing and typesetting indust Ipsumhas been the",
    },
    {
      id: 3,
      name: "Teeth Whitening",
      img: whitening,
      description:
        " Lorem Ipsum is simply dummy printing and typesetting indust Ipsumhas been the",
    },
  ];
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-center text-primary text-xl uppercase">
          Our Services
        </h1>
        <p className=" text-center text-2xl uppercase"> Services we provide</p>
      </div>
      <div className=" mt-3 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {servicesData.map((data) => (
          <ServiceCard key={data.id} data={data}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
