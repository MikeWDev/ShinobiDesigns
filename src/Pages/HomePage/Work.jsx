import React from "react";
import food from "../../assets/food.png";
import mario from "../../assets/mario.png";
import marmite from "../../assets/marmite.png";
import notes from "../../assets/notes.png";

const Work = () => {
  return (
    <section id="work" class="mt-5">
      <div class="container">
        <h2 class="mb-2">Some of Our Work</h2>
        <div class="row gap-2">
          <div class="col-12-xs col-6-md col-3-lg">
            <div class="card p-0">
              <h3 class="card-title m-1">Mario Club</h3>
              <img src={mario} alt="" />
              <p class="m-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
                hic!
              </p>
            </div>
          </div>
          <div class="col-12-xs col-6-md col-3-lg">
            <div class="card p-0">
              <h3 class="card-title m-1">Ninja Food</h3>
              <img src={food} alt="" />
              <p class="m-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
                hic!
              </p>
            </div>
          </div>
          <div class="col-12-xs col-6-md col-3-lg">
            <div class="card p-0">
              <h3 class="card-title m-1">Just Add Marmite</h3>
              <img src={marmite} alt="" />
              <p class="m-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
                hic!
              </p>
            </div>
          </div>
          <div class="col-12-xs col-6-md col-3-lg">
            <div class="card p-0">
              <h3 class="card-title m-1">Ninja Notes</h3>
              <img src={notes} alt="" />
              <p class="m-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
                hic!
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-center mt-2">
          <button class="btn-secondary text-white font-md">View All</button>
        </div>
      </div>
    </section>
  );
};

export default Work;
