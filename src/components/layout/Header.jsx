import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap"></use>
          </svg>
          <span class="fs-4">World Pedia</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <NavLink to={"/"}>
              <a href="#" class="nav-link active" aria-current="page">
                Home
              </a>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to={"/about"}>
              <a href="#" class="nav-link">
                About
              </a>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to={"/countries"}>
              <a href="#" class="nav-link">
                Countries
              </a>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to={"/contact"}>
              <a class="nav-link">Contact</a>
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
