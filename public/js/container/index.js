//Manejador que sabe como renderizar su pagina (container --> component/modules)
//un container para la logica de cada vista
import {cardComponent} from '../components/cardComponent.js'
import { getPokemon } from '../services/fetchServices.js'

//renderizar imagen (definir objetos js para encontrar la img name)
const RenderPokemon = (json) => {
    let _root = document.getElementById("root");
    let name = json.name;
    let img = json.sprites.other["official-artwork"].front_default;
    _root.innerHTML += cardComponent(img,name);
}

export const IndexRender = () => {
    alert("renderizando");
    getPokemon("pikachu", RenderPokemon);
}
/*
 const searchPokemon = (search) => {
    _root.innerHTML = "";
    getPokemon(search, RenderPokemon)
}
const chargeInit = () => {
    getPokemon("ditto", RenderPokemon)
    getPokemon("pikachu", RenderPokemon)
    getPokemon("charmander", RenderPokemon)
    getPokemon("charizard", RenderPokemon)
    getPokemon("bulbasaur", RenderPokemon)
    getPokemon("venusaur", RenderPokemon)
    getPokemon("wartortle", RenderPokemon)
}
*/