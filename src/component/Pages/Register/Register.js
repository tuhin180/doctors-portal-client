import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthUserContext } from "../../../context/UserContext";
import useToken from "../../../Hooks/useToken";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { createUser, userProfile, googleLogin } = useContext(AuthUserContext);
  const googleProvider = new GoogleAuthProvider();

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate("/");
  }

  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast.success("user created succesfully");
        userProfile(data.name)
          .then(() => {
            saveUser(data.name, data.email);
            // Profile updated!
            toast.success("profile updated");
            // ...
          })
          .catch((error) => {
            // An error occurred
            toast.error(error);
            // ...
          });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
        // ..
      });
  };

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Navigate(from, { replace: true });
        toast("login succesfull");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorCode, errorMessage);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://doctors-portal-server-delta-ten.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className=" h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-lg rounded-lg">
        <h1 className="text-xl text-center">Register</h1>
        <form onSubmit={handleSubmit(handleRegister)}>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 characters or above",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
          </div>

          <input
            className="btn btn-accent w-full mt-6"
            type="submit"
            value="Register"
          />
        </form>
        <div className="flex flex-col w-full border-opacity-50 mt-3">
          <p>
            Already have an account{" "}
            <Link to="/login" className="capitalize text-secondary">
              Login
            </Link>
          </p>
          <div className="divider">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="uppercase btn btn-outline w-fulll "
          >
            signin with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
