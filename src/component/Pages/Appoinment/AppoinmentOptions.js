import React from "react";

const AppoinmentOptions = ({ option, setTreatment }) => {
  const { name, slots } = option;

  return (
    <div className="card  shadow-xl">
      <div className="card-body text-center">
        <h2 className=" text-cneter text-primary text-2xl font-bold">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"}
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="Booking-modal"
            className="btn  btn-primary text-white"
          >
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOptions;
