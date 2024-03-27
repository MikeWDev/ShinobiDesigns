const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));

const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("./src/style/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["./src/**/*.jsx", "./index.html"] }))
    .pipe(dest("./src/css"));
}

function watchTask() {
  watch(["./src/style/**/*.scss", "./src/**/*.jsx"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
