import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import AppoinmentOptions from "./AppoinmentOptions";
import BookingModal from "./BookingModal";

const AvailableAppoinment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const date = format(selectedDate, "PP");

  const { data: appoinmentOption = [], refetch } = useQuery({
    queryKey: ["appoinmentOption", date],
    queryFn: () =>
      fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`).then(
        (res) => res.json()
      ),
  });

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
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppoinment;
