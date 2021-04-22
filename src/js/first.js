document.addEventListener("DOMContentLoaded", function(){
    const pokelistElm = document.querySelector(".pokelist")
    const pokefooter = document.querySelector(".pokefooter")
    
    if(pokelistElm){

    let url = new URLSearchParams(window.location.search);

    let offset = url.get("offset") ? url.get("offset") : 0;

    let nextOffset;
    let prevOffset;


    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let maxOffset = data.count - data.count % 20;
        //let lastpage = data.count % 20; % = modulus
        //console.log(maxOffset)

        nextOffset = offset >= maxOffset ? maxOffset : parseInt(offset) + 20 //offset er hentet ud af URL parameter og er derfor en string, så vi bruger parseint til at konventere det til et tal
        prevOffset = offset <= 0 ? 0 : parseInt(offset) - 20 

        data.results.forEach(pokemon => {

            let li = document.createElement('li')
            li.classList.add("pokelist__item")

            li.innerHTML = `
            <a href="/pokemon?name=${pokemon.name}&backpage=${offset}" class="pokelist__link">
            ${pokemon.name}
            </a>
            `
            pokelistElm.appendChild(li)
        })

        let prev = document.createElement("a");
        prev.classList.add("btn");
        offset == 0 && prev.classList.add("btn__disabled");
        prev.setAttribute("href", `?offset=${prevOffset}`);
        let prevNode = document.createTextNode("Previous");
        prev.appendChild(prevNode)
        pokefooter.appendChild(prev)


        let next = document.createElement("a");
        next.classList.add("btn")
        if(offset >= maxOffset) next.classList.add("btn__disabled")
        next.setAttribute("href", `?offset=${nextOffset}`);
        let nextNode = document.createTextNode("Next");
        next.appendChild(nextNode)
        pokefooter.appendChild(next)
    })
}
})