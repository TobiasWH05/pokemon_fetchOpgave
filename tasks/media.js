//kig efter media filer. Skal flyttes til en tilsvarende mediamappe i dist mappen
//husk at exportere og derefter importere i gulfile
const gulp = require("gulp");
const connect = require("gulp-connect");

function media(){
    return gulp.src("./src/media/**/*.*")
        .pipe(gulp.dest("./dist/media"))
        .pipe(connect.reload());
}

function buildMEDIA(){
    return gulp.src("./src/media/**/*.*")
        .pipe(gulp.dest("./build/media"));
}

function watchmedia(){
    return gulp.watch("./src/media/**/*.*", {
        ignoreInitial: false
    }, media)
}

module.exports = {
    watchmedia,
    buildMEDIA
}