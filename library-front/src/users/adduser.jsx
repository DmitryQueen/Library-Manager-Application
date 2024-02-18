import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const { name, surname, email, phone } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //await axios.post("", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
          <h2 className="text-center m-4">User Registration</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Surname" className="form-label">
                Surname
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter surname"
                name="surname"
                value={surname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="e-mail" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter e-mail"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter phone"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary ">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to={"/"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
