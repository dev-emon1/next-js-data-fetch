import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Users = async () => {
  const data = await getData();
  return (
    <div className="container">
      <div className="card-wrapper">
        {data.map((item) => (
          <div className="card">
            <h4>{item.name}</h4>
            <p>{item.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
