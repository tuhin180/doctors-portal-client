import React from "react";

const TestimonialCard = ({ TestimonialCard }) => {
  const { name, state, img, description } = TestimonialCard;
  return (
    <div className="text-left p-6 shadow-lg rounded-lg">
      <p>{description}</p>
      <div className="mt-8 flex sm:flex-col lg:flex-row gap-4 ">
        <div>
          <img src={img} className="rounded-full" alt="" />
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <small>{state}</small>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
