import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Ебучая библиотека
          </a>
          <form className="d-flex" role="search">
            <Link
              class="btn btn-primary mx-2"
              type="button"
              style={{ width: "100%" }}
              to="/adduser"
            >
              Add Student
            </Link>
            <input
              className="form-control ms-4 me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
