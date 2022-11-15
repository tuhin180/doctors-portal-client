import React from "react";
import quotes from "../../../../assets/icons/quote.svg";
import reviewer1 from "../../../../assets/images/people1.png";
import reviewer2 from "../../../../assets/images/people2.png";
import reviewer3 from "../../../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
  const review = [
    {
      _id: 1,
      name: "lifan cooper",
      state: "california",
      img: reviewer1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "Elon muxxi",
      state: "california",
      img: reviewer2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      name: "joseph henry",
      state: "california",
      img: reviewer3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg text-primary font-bold">Testimonial</h1>
          <h2 className="text-2xl">What Our Patients Says</h2>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quotes} alt="" />
        </figure>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4">
        {review.map((data) => (
          <TestimonialCard
            key={data._id}
            TestimonialCard={data}
          ></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
