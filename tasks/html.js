const gulp = require("gulp"); // lavet en gulp fil
const connect = require("gulp-connect"); // import gulp modul
const rename = require("gulp-rename"); // ændrer navnet på objektet, fx fra /contact/index.html til /contact/

function html() {
    return gulp.src("./src/html/*.html") // tar alle html filer
    .pipe(rename(function(path){
        if(path.basename !== "index") {
            path.dirname = path.basename;
            path.basename = "index";
        }
        console.log(path.basename)
    }))
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload());
}

function buildHTML() {
    return gulp.src("./src/html/*.html") // tar alle html filer
    .pipe(rename(function(path){
        if(path.basename !== "index") {
            path.dirname = path.basename;
            path.basename = "index";
        }
        console.log(path.basename)
    }))
    .pipe(gulp.dest("./build"));
}

function watchHTML () {
return gulp.watch("./src/html/*.html", {
    ignoreInitial: false
}, html)
}

module.exports = {
    watchHTML,
    buildHTML
}