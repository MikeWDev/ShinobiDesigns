import { ArrowCounterClockwise } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

const Libary = () => {
  return (
    <>
      <nav class="navbar-primary text-white mb-4">
        <div class="container">
          <h2 class="site-title">Shinobi CSS</h2>
          <p>A lightweight CSS library for dev ninjas</p>
        </div>
      </nav>
      <div class="container">
        <div className=" mb-2  svg">
          <Link to="/ShinobiDesigns">
            <ArrowCounterClockwise
              className="btn-outlined-secondary text-secondary text-hover-white"
              size={32}
              color="#1ac886"
            />
          </Link>
        </div>
        {/*Colosr*/}
        <h2 class="mb-2">Colors</h2>
        <span class="text-primary">primary text</span> |
        <span class="text-secondary">secondary text</span> |
        <span class="text-error">error text</span> |
        <span class="text-info">info text</span> |
        <span class="text-blue">blue text</span> |
        <span class="text-red">red text</span> |
        <span class="text-green">green text</span> |
        <span class="text-yellow">yellow text</span> |
        <span class="text-purple">purple text</span> |
        <span class="text-orange">orange text</span> |
        <span class="text-gray">gray text</span>
        <br />
        <br />
        <span class="bg-primary text-white">bg primary</span> |
        <span class="bg-secondary text-white">bg secondary</span> |
        <span class="bg-error text-white">bg error</span> |
        <span class="bg-info text-white">bg info</span> |
        <span class="bg-blue text-white">bg blue</span> |
        <span class="bg-red text-white">bg red</span> |
        <span class="bg-green text-white">bg green</span> |
        <span class="bg-yellow text-white">bg yellow</span> |
        <span class="bg-purple text-white">bg purple</span> |
        <span class="bg-orange text-white">bg orange</span> |
        <span class="bg-gray text-white">bg gray</span> |
        <br />
        <br />
        <span class="bg-primary-dark-8 text-white">primary dark 8</span> |
        <span class="bg-primary-dark-6 text-white">primary dark 6</span> |
        <span class="bg-primary-dark-4 text-white">primary dark 4</span> |
        <span class="bg-primary-dark-2 text-white">primary dark 2</span> |
        <span class="bg-primary text-white">primary</span> |
        <span class="bg-primary-light-2 text-white">primary light 2</span> |
        <span class="bg-primary-light-4 text-white">primary light 4</span> |
        <span class="bg-primary-light-6 text-white">primary light 6</span> |
        <span class="bg-primary-light-8 text-white">primary light 8</span> |
        <br />
        <br />
        <a href="#" class="text-primary text-hover-orange-light-1">
          hover me
        </a>
        <hr class="mt-4 mb-4" />
        {/*font sizes*/}
        <h2 class="mb-2">Font Sizes</h2>
        <div class="font-sm">this is small font</div>
        <div class="font-md">this is medium font</div>
        <div class="font-lg">this is large font</div>
        <div class="font-xl">this is extra large font</div>
        <div class="font-xxl">this is extra, extra large font</div>
        <hr class="mt-4 mb-4" />
        {/*Buttons */}
        <h2 class="mb-2">Buttons</h2>
        <a href="#" class="btn">
          default btn
        </a>
        <a href="#" class="btn-primary text-white">
          click me
        </a>
        <a href="#" class="btn-secondary text-white">
          click me
        </a>
        <a href="#" class="btn-error text-white">
          click me
        </a>
        <a href="#" class="btn-info">
          click me
        </a>
        <a href="#" class="btn-outlined-purple text-purple text-hover-white">
          click me
        </a>
        <a href="#" class="btn-outlined-orange text-orange text-hover-white">
          click me
        </a>
        <a href="#" class="btn-complement-purple">
          click me
        </a>
        <a href="#" class="btn-complement-primary">
          click me
        </a>
        <hr class="mt-4 mb-4" />
        {/*Cards */}
        <h2 class="mb-2">Cards</h2>
        <div class="card">
          <h1 class="card-title">This is a title</h1>
          <p class="card-body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sunt,
            quo totam aliquam praesentium ducimus tempore sapiente quia nulla
            optio? Lorem ipsum, dolor sit amet consectetur{" "}
            <a href="">adipisicing elit</a>. Libero laboriosam laborum
            exercitationem autem commodi voluptas odio aliquid ut velit
            doloremque minima, quaerat dolores, corporis consequuntur totam nam
            id veniam maxime.
          </p>
        </div>
        <hr class="mt-4 mb-4" />
        {/*Grid system */}
        <h2 class="mb-2">Grid System</h2>
        <div class="row gap-2 justify-flex-end">
          <div class="col-12-xs col-5-sm col-3-xl">
            <div class="card">
              <h3 class="card-title">Hello, ninjas</h3>
              <p class="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="col-12-xs col-5-sm col-3-xl">
            <div class="card">
              <h3 class="card-title">Hello, ninjas</h3>
              <p class="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="col-12-xs col-5-sm col-3-xl">
            <div class="card">
              <h3 class="card-title">Hello, ninjas</h3>
              <p class="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="col-12-xs col-5-sm col-3-xl">
            <div class="card">
              <h3 class="card-title">Hello, ninjas</h3>
              <p class="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <hr class="mt-4 mb-4" />
      </div>
    </>
  );
};

export default Libary;
