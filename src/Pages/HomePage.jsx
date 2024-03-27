import React from "react";
import food from "../assets/food.png";
import mario from "../assets/mario.png";
import marmite from "../assets/marmite.png";
import notes from "../assets/notes.png";
import laptop from "../assets/laptop.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/* Nav*/}
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

      {/* Intro */}
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

      {/*About */}
      <section id="about" class="bg-secondary-light-9 mt-5 pt-4 pb-4">
        <div class="container">
          <h2 class="mb-2">About Shinobi Designs</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam
            animi aliquid sequi fuga, nam nesciunt dolore libero dolorem
            exercitationem aliquam cupiditate atque illo, quae dicta doloribus
            et? Ab ipsam inventore quam asperiores, sequi unde tenetur
            accusamus, distinctio magni necessitatibus quis deserunt id alias.
            Iste eum ea labore rerum voluptatibus.
          </p>
          <p class="mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            nam, corrupti dolorum inventore perspiciatis id illum repellat iste
            amet sapiente ducimus nihil molestias quasi, totam, ratione minima
            molestiae blanditiis iure consequatur praesentium debitis. Nulla
            maiores doloremque tempore nobis dolorum amet!
          </p>
        </div>
      </section>

      {/*Work section */}
      <section id="work" class="mt-5">
        <div class="container">
          <h2 class="mb-2">Some of Our Work</h2>
          <div class="row gap-2">
            <div class="col-12-xs col-6-md col-3-lg">
              <div class="card p-0">
                <h3 class="card-title m-1">Mario Club</h3>
                <img src={mario} alt="" />
                <p class="m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, hic!
                </p>
              </div>
            </div>
            <div class="col-12-xs col-6-md col-3-lg">
              <div class="card p-0">
                <h3 class="card-title m-1">Ninja Food</h3>
                <img src={food} alt="" />
                <p class="m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, hic!
                </p>
              </div>
            </div>
            <div class="col-12-xs col-6-md col-3-lg">
              <div class="card p-0">
                <h3 class="card-title m-1">Just Add Marmite</h3>
                <img src={marmite} alt="" />
                <p class="m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, hic!
                </p>
              </div>
            </div>
            <div class="col-12-xs col-6-md col-3-lg">
              <div class="card p-0">
                <h3 class="card-title m-1">Ninja Notes</h3>
                <img src={notes} alt="" />
                <p class="m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, hic!
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-center mt-2">
            <button class="btn-secondary text-white font-md">View All</button>
          </div>
        </div>
      </section>

      <footer class="bg-gray-light-7   pt-3 pb-3 mt-5 ">
        <div class="container display-f justify-center">
          <p>Copyright 2021 Shinobi Designs</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
