import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthUserContext } from "../../../context/UserContext";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthUserContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      name,
      phone,
      email,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <section>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="Booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-2 mt-6"
          >
            <input
              type="text"
              value={date}
              className="input input-bordered w-full "
              disabled
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              value={user?.displayName}
              disabled
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              disabled
              placeholder="Email"
              required
              className="input input-bordered w-full "
            />

            <br />
            <input
              className="w-full  btn btn-accent"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingModal;
