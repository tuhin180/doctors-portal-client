import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthUserContext } from "../../../context/UserContext";
const MyAppoinment = () => {
  const { user } = useContext(AuthUserContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { isLoading, error, data } = useQuery({
    queryKey: ["appoinment"],
    queryFn: () =>
      fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1 className="text-xl mb-4">My Appointment</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((book, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{book.patient}</td>
                <td>{book.name}t</td>
                <td>{book.appointmentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinment;
