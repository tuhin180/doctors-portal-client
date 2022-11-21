import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const StripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const data = useLoaderData();
  const { treatment, price, appointmentDate, slot } = data;

  return (
    <div>
      <h1 className="text-2xl">Payment for {treatment}</h1>
      <p className="text-2xl">
        please pay <span className="font-bold"> ${price} </span> for yor booking
        on {appointmentDate} and time {slot}
      </p>
      <div className="my-12 w-96">
        <Elements stripe={StripePromise}>
          <CheckOutForm data={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
