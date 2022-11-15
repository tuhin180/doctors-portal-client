import React from "react";
import bgimage from "../../../../assets/images/appointment.png";
const ContacktUs = () => {
  const handleContactUsform = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    console.log(email, subject, message);
  };
  return (
    <section className="rounded" style={{ backgroundImage: `url(${bgimage})` }}>
      <div className="mt-6 text-center sm:w-full lg:w-1/3 mx-auto p-4">
        <div>
          <h1 className="text-lg text-primary font-semibold">Contact us</h1>
          <h2 className="text-2xl font-semibold text-white">
            Stay connected with us
          </h2>
        </div>
        <div className="mt-8 p-6 ">
          <form onSubmit={handleContactUsform}>
            <div className=" flex flex-col gap-4 mx-auto ">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input input-bordered input-primary w-full "
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input input-bordered input-primary w-full"
              />
              <textarea
                className="textarea textarea-primary"
                name="message"
                placeholder="Your Messages"
              ></textarea>
            </div>
            <input
              className="mt-10 btn btn-primary text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContacktUs;
