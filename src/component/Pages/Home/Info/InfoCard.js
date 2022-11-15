import React from "react";

const InfoCard = ({ data }) => {
  const { name, description, icon, bgColor } = data;
  return (
    <div className={`bg-primary flex rounded-lg ${bgColor}`}>
      <div className="flex  justify-center items-center my-12 ml-5 mr-4">
        <img src={icon} className="text-7xl text-white " alt="" />
      </div>
      <div className="my-12 mr-8 text-white">
        <h3 className="font-bold mb-2">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
