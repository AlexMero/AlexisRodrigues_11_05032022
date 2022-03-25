const autoprefixer = require('gulp-autoprefixer')
const gulp = require('gulp')
const gulpConcat = require('gulp-concat')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')

function makeCss() {
  return gulp
    .src(['./src/style/bases.scss', './src/**/**/*.scss', './src/**/*.scss'])
    .pipe(gulpConcat('style.css'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest('./src/style'))
}
function watch() {
  gulp.watch('./src/**/*.scss', makeCss)
}

module.exports = {
  makeCss,
  watch,
}
