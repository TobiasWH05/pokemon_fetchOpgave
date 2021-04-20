const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps')

sass.compiler = require('node-sass'); 


function scss(){
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "expanded"}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./dist/css"))
        .pipe(connect.reload());
}

function buildSCSS(){
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(gulp.dest("./build/css"));
}

function watchSCSS(){
    return gulp.watch('./src/scss/**/*.scss', {
        ignoreInitial: false
    }, scss)   
}

module.exports = {
    watchSCSS,
    buildSCSS
}