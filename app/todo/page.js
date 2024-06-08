"use client";
import React, { useEffect, useState } from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Todo = async () => {
  const data = await getData();

  return (
    <div className="container">
      <div className="todo-main">
        <div className="card-wrapper">
          {data.map((item) => (
            <div className="card">
              <h2>{item.id}</h2>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
