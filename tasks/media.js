const gulp = require('gulp');
const connect = require('gulp-connect');


function media(){
    return gulp.src("./src/media/**/*.*")
        .pipe(gulp.dest("./dist/media"))
        .pipe(connect.reload());
}

function buildMedia(){
    return gulp.src("./src/media/**/*.*")
        .pipe(gulp.dest("./build/media"));
}

function watchMedia(){
    return gulp.watch('./src/media/**/*.*', {
        ignoreInitial: false
    }, media)   
}

module.exports = {
    watchMedia,
    buildMedia
}