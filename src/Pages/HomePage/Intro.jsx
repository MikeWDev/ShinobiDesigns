import React from "react";
import laptop from "../../assets/laptop.svg";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <div class="container mt-5 " style={{ "margin-top": "75px" }}>
      <div class="row justify-center">
        <div class="col-12-xs col-5-md" style={{ "align-items": "center" }}>
          <h2>
            <div class="font-xxl">Black-Belt</div>
            <div class="font-xxl text-secondary">Your Website</div>
          </h2>
          <p class="text-gray mt-2 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link
            to="libary"
            class="btn-outlined-secondary text-secondary text-hover-white"
          >
            Check our libary
          </Link>
        </div>
        <div class="col-12-xs col-5-md">
          <img src={laptop} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
