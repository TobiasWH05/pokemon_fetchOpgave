document.addEventListener("DOMContentLoaded", function(){

    let goBackElm = document.querySelector(".goback")

    if (goBackElm){

        goBackElm.addEventListener("click", function(){
            history.back();
        })
    }
})