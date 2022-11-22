import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const {
    isLoading,
    error,
    data: specialities,
  } = useQuery({
    queryKey: ["speciality"],
    queryFn: () =>
      fetch(
        "https://doctors-portal-server-delta-ten.vercel.app/appoinmentSpeciality"
      ).then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const imageHostKey = process.env.REACT_APP_IMAGEBB_KEY;

  const handleAddDoctor = (data) => {
    const image = data.img[0];
    const formdata = new FormData();
    formdata.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          //   console.log(imgData.data.url);
          const doctors = {
            name: data.name,
            email: data.email,
            speciality: data.options,
            image: imgData.data.url,
          };

          fetch("https://doctors-portal-server-delta-ten.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctors),
          })
            .then((res) => res.json())
            .then((doctor) => {
              console.log(doctor);
              toast.success(`${data.name} doctors is addeded successfully`);
              navigate("/dashboard/manageDoctors");
            });
        }
      });
  };

  return (
    <div>
      <h1 className=" text-2xl font-semibold">Add a Doctor</h1>

      <div className="w-96 p-7 shadow-lg rounded-lg">
        <h1 className="text-xl text-center">Login</h1>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-error">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Speciality</span>
            </label>
            <select
              {...register("options")}
              className="select select-bordered w-full max-w-xs"
            >
              {specialities.map((special) => (
                <option key={special._id} value={special.name}>
                  {special.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("img", { required: "Photo is required" })}
              className="input input-bordered w-full max-w-xs "
            />
            {errors.img && <p className="text-error">{errors.img?.message}</p>}
          </div>
          <input
            className="btn btn-accent w-full mt-4"
            type="submit"
            value="Add Doctor"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
<h1>Add a Doctor</h1>;
