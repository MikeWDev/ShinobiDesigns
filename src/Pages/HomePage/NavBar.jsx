import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar justify-between">
      <div class="container">
        <h1 class="site-title">Shinobi Designs</h1>
        <ul class="display-f">
          <li class=" text-hover-secondary">
            <a href="#work">Our Work</a>
          </li>
          <li class="ml-1 text-hover-secondary">
            <a href="#about">About Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
