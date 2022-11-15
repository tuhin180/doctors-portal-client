import React from "react";
import treatment from "../../../../assets/images/treatment.png";
const Term = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto ga">
        <div className=" ml-4 p-2">
          <img
            src={treatment}
            className="  w-[458px] h-[576px] rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div>
          <div className=" mt-28">
            <h1 className="text-5xl font-bold mb-4">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
          </div>
          <button className="left-0 uppercase btn btn-primary mt-4 text-white">
            get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Term;
