const { task } = require("gulp");
const gulp = require("gulp");
const connect = require("gulp-connect");
//const rename = require("gulp-rename"); //rename hører til de 2 funktioner vi har flyttet til html.js
const { watchHTML, buildHTML } = require("./tasks/html"); //vi har eksporteret et objekt fra html.js, så derfor skal vi gribe den her
const { watchSCSS, buildSCSS } = require("./tasks/scss");
const {watchJS, buildJS} = require("./tasks/js");
const {watchmedia, buildMEDIA} = require("./tasks/media");
const {watchImage, buildIMAGE} = require("./tasks/image")


/* Disse to funktioner har vi flyttet til html.js
function html(){
    return gulp.src("./src/html/*.html") //vi kigger i den yderste mappe -> src -> * alle filer der har .html
    .pipe(rename(function(path){
        //console.log(path.basename); //her kan vi kigge på hvilke filer der bliver behandlet
        if(path.basename !== "index"){ //Hvis ikke den hedder index, så skal der oprettes en mappe med samme navn som filen. Ex. "contact"
            path.dirname = path.basename; //dirname betyder "directory name". 
            path.basename = "index"
        }
    }))
    .pipe(gulp.dest("./dist")) //så gemmer vi en kopi i en mappe vi kalder "dist"
    .pipe(connect.reload()); //vigtigt at lukke vores pipe ";", så gulp ikke står og venter på at der kommer mere. 
    //".dest" står for destination
    //"reload" betyder at browseren vil refreshe siden automatisk efter ændringer

}

function watchHTML(){
    return gulp.watch("./src/html/*.html", {
        ignoreInitial: false //dvs. den skal køre initial run selvom der ikke er blevet gemt endnu. Ellers vil den først køre, når der gemmes første gang
    }, html) //watch er en metode der tager 3 argumenter: den første er en string der definerer stien til mappen vi holder øje med, et objekt og det sidste er et kald til vores html funktion
}
*/

function dist (done){ //i stedet for done kunne man have skrevet "cb" der står for "callback". 
    
//her kommer det vi gerne vil have tasken til at gøre
    console.log("Hej lille nissemand, er det snart jul?");
    watchHTML()
    watchSCSS()
    watchJS()
    watchmedia()
    watchImage()
    connect.server({ //server er en metode der tager ét argument, som er et objekt
        root: "./dist",
        livereload: true, 
        port: 3000 //her kan vi skifte port hvis default porten ikke virker optimalt. Port 8080 fx kan der ofte være problemer med
    })
    done()
}

function build(done){
    buildHTML()
    buildSCSS()
    buildJS()
    buildMEDIA()
    buildIMAGE()
    done()
}

exports.default = dist; //vi sætter den til at køre vores funktion dist som default
exports.build = build;
