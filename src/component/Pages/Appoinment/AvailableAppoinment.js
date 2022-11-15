import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppoinmentOptions from "./AppoinmentOptions";
import BookingModal from "./BookingModal";

const AvailableAppoinment = ({ selectedDate }) => {
  const [appoinmentOption, setAppoinmentOption] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("appoinmentService.json")
      .then((res) => res.json())
      .then((data) => setAppoinmentOption(data));
  }, [selectedDate]);
  return (
    <div className="mt-10">
      <div>
        <p className="text-center text-primary font-semibold text-lg">
          Available Appointments on {format(selectedDate, "PP")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {appoinmentOption.map((option) => (
          <AppoinmentOptions
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppoinmentOptions>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppoinment;
