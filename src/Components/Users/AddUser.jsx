import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    number: "",
    website: "",
  });

  const { name, username, email, number, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-1">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div class="form-group m-2">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="form-group m-2">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="form-group m-2">
            <input
              type="email"
              class="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="form-group m-2">
            <input
              type="number"
              class="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="number"
              value={number}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="form-group m-2">
            <input
              type="url"
              class="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button class="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
