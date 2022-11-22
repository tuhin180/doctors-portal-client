import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

const AllUsers = () => {
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery({
    queryKey: ["Users"],
    queryFn: () =>
      fetch("https://doctors-portal-server-delta-ten.vercel.app/users").then(
        (res) => res.json()
      ),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const hanldeMakeAdmin = (id) => {
    fetch(
      `https://doctors-portal-server-delta-ten.vercel.app/users/admin/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("make admin successfull");
          refetch();
        }
      });
  };
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-4">All User</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => hanldeMakeAdmin(user._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs btn-accent">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
