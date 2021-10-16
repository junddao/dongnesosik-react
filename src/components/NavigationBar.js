import React from "react";

// import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = () => (
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white sticky"
      data-offset="500"
    >
      <div class="container">
        <Link to="/" class="navbar-brand">
          동내<span class="text-primary">소식.</span>
        </Link>

        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Services" class="nav-link">
                Services
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/Contact" class="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
