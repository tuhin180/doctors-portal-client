import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  const { name, img, description } = data;
  return (
    <div className="flex mx-auto p-8 shadow-lg rounded-xl">
      <Link>
        <div className="grid  place-items-center">
          <img src={img} alt="" />
        </div>
        <div className="text-center mt-4 ">
          <h1 className="text-xl font-bold mb-2">{name}</h1>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
