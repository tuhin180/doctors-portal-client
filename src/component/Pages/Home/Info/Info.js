import React from "react";
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  const infoData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      icon: clock,
      bgColor: "bg-primary",
    },
    {
      id: 2,
      name: "Visit our location",
      description: "Lorem Ipsum is simply dummy text of the pri",
      icon: marker,
      bgColor: "bg-accent",
    },
    {
      id: 3,
      name: "Contact us now",
      description: "Lorem Ipsum is simply dummy text of the pri",
      icon: phone,
      bgColor: "bg-secondary",
    },
  ];
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
        {infoData.map((data) => (
          <InfoCard key={data.id} data={data}></InfoCard>
        ))}
      </div>
    </div>
  );
};

export default Info;
