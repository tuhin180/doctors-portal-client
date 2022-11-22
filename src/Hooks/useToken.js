import { useEffect, useState } from "react";

const useToken = (email) => {
  console.log(email);
  const [token, setToken] = useState("");
  useEffect(() => {
    fetch(
      `https://doctors-portal-server-delta-ten.vercel.app/jwt?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.accesstoken) {
          localStorage.setItem("accessToken", data.accesstoken);
          setToken(data.accesstoken);
        }
      });
  }, [email]);
  return [token];
};
export default useToken;
