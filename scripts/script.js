import { data } from "./data.js";

let popular = document.getElementById("template-popular").content;
let movies = document.getElementById("template-movies").content;
let fragment = document.createDocumentFragment();
let container = document.getElementById("container-movies");
// let series = document.getElementById("template-serie").content;

//console.log(data);

data.forEach(element => {
    const {name, poster, category} = element

    // console.log(name, poster, category);

        if(category === "movies"){
        movies.querySelector("img").setAttribute("src", poster);
        movies.querySelector('h5').textContent = name;

        const clone = movies.cloneNode(true);
        fragment.appendChild(clone);

        }if(category === "series"){
            series.querySelector("img").setAttribute("src", poster);
            sereies.querySelector('h5').textContent = name;
    
            const clone = series.cloneNode(true);
            fragment.appendChild(clone);
        
        }
    container.appendChild(fragment);
});

