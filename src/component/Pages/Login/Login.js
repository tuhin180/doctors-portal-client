import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthUserContext } from "../../../context/UserContext";
import useToken from "../../../Hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { loginUser, googleLogin, forgetPassword } =
    useContext(AuthUserContext);
  const googleProvider = new GoogleAuthProvider();

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    loginUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        setLoginUserEmail(data.email);

        toast.success("user Logged in succesfully");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast("login succesfull");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorCode, errorMessage);
      });
  };

  const hadleforgotPassword = () => {
    forgetPassword()
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div className=" h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-lg rounded-lg">
        <h1 className="text-xl text-center">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
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
              {...register("password", { required: "password is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}

            <label className="label">
              <Link onClick={hadleforgotPassword} className="label-text">
                Forget password
              </Link>
            </label>
          </div>

          <input
            className="btn btn-accent w-full"
            type="submit"
            value="Login"
          />
        </form>
        <div className="flex flex-col w-full border-opacity-50 mt-3">
          <p>
            New to Doctor Portal{" "}
            <Link to="/register" className="capitalize text-secondary">
              Create an account
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

export default Login;
