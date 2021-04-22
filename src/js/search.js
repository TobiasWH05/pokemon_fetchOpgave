document.addEventListener("DOMContentLoaded", function(){

    let resultElm = document.querySelector(".result__list")
    let resultMsg = document.querySelector(".result__message")
    let pokefooter = document.querySelector(".pokefooter")

    if (resultElm){

        let url = new URLSearchParams(window.location.search);
        let search = url.get("search").toLowerCase();

        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            let found = data.result.filter(result => result.name.includes(search))
            console.log(found)

            if(found.length) {

                let messageNode = document.createTextNode(`The search for "${search}" returned the following results:`)
            resultMsg.appendChild(messageNode)


        found.forEach(pokemon => {

            let li = document.createElement('li')

            li.innerHTML = `
            <a href="/pokemon?name=${pokemon.name}">
            ${pokemon.name}
            </a>
            `
            resultElm.appendChild(li)
        })
    }else {
        let messageNode = document.createTextNode(`Sorry the search for "${search}" did not return any results`)
        resultMsg.appendChild(messageNode)
    }
    })   

    }

})