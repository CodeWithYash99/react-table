import React, { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  // const fetchdata = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await res.json();
  //   setData(data);
  //   console.log(data);
  // };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setData(data))
  }, []);

  return (
    <div className="app-container d-flex flex-column align-items-center">
      <table>
        <thead>
          <tr>
            <th className="th">ID</th>
            <th className="th">Name</th>
            <th className="th">Username</th>
            <th className="th">Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((each) => (
            <tr key={each.id}>
              <td className="td">{each.id}</td>
              <td className="td">{each.name}</td>
              <td className="td">{each.username}</td>
              <td className="td">{each.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
