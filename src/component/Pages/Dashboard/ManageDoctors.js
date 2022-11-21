import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import DoctorsDeletingModal from "./DoctorsDeletingModal";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const {
    isLoading,
    error,
    data: doctors,
    refetch,
  } = useQuery({
    queryKey: ["Doctors"],
    queryFn: () =>
      fetch("http://localhost:5000/doctors", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const handleDeleteDoctor = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          refetch();
          toast.success("doctors deleted");
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl">Manage doctor</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>speciality</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar offline">
                    <div className="w-24 rounded-full">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.speciality}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="deletingModal"
                    className="btn btn btn-error btn-sm text-white"
                  >
                    delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <DoctorsDeletingModal
          title={`are you sure you want to delete`}
          message={`if you delete ${deletingDoctor.name} will be gone `}
          successAction={handleDeleteDoctor}
          buttonName={"delete"}
          modalData={deletingDoctor}
          closeModal={closeModal}
        ></DoctorsDeletingModal>
      )}
    </div>
  );
};

export default ManageDoctors;
