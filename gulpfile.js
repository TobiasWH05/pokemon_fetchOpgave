const gulp = require("gulp"); // lavet en gulp fil
const connect = require("gulp-connect"); // import gulp modul
const {
    watchHTML,
    buildHTML
} = require("./tasks/html")
const {
    watchSCSS,
    buildSCSS
} = require("./tasks/scss");
const {
    watchJS,
    buildJS
} = require("./tasks/js")
const {
    watchMedia,
    buildMedia
} = require("./tasks/media");
const {
    watchImage,
    buildIMAGE
} = require("./tasks/image");

function dist(done) { //eksekvere ting og sager
    // her kommer det vi gerne vil have tasken til at gøre
    watchHTML() // når vi kører function, eksekverer vi watchHTML, som returner objektet med gulp-metoden
    watchSCSS()
    watchJS()
    watchMedia()
    watchImage()

    // den kigger på mappen, holder øje om vi gemmer .html filer, og hvis vi gør, kører den HTML funktionen - og sørger for, at uanset hvad, når vi starter gulp - hvis vi ændre noget før gulp start - så kører den første gang også.

    connect.server({
        root: "./dist",
        livereload: true,
        port: 3000
    })
    done()
}

function build(done) {
    buildHTML()
    buildSCSS()
    buildJS()
    buildMedia()
    buildIMAGE()
    done()
}

exports.default = dist;
exports.build = build;