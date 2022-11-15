import React from "react";
import Doctor from "../../../../assets/images/doctor.png";
import appoinment from "../../../../assets/images/appointment.png";
const MakeAppoinment = () => {
  return (
    <section
      className="mt-32 rounded"
      style={{ backgroundImage: `url(${appoinment})` }}
    >
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={Doctor}
            className=" -mt-32 lg:w-1/2  rounded-lg shadow-2xl hidden md:block lg:block"
            alt=""
          />

          <div>
            <h3 className="text-lg text-primary mb-8">Appoinment</h3>
            <h1 className="text-4xl font-semibold capitalize text-white">
              Make an appoinment today
            </h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary uppercase  text-center text-white ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
