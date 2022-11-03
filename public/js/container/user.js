//Manejador que sabe como renderizar su pagina (container --> component/modules)
//un container para la logica de cada vista
import {cardComponent} from '../components/cardComponent.js'
import { getPokemon } from '../services/fetchServices.js'

let _root;
//renderizar imagen (definir objetos js para encontrar la img name)
const RenderPokemon = (json) => {
    _root = document.getElementById("root");
    let name = json.name;
    let img = json.sprites.other["official-artwork"].front_default;
    _root.innerHTML += cardComponent(img,name);
}
const chargeInit = () => {
    alert("renderizando poke");    
    for(var i = 1 ; i <= 10; i++){
        getPokemon(i, RenderPokemon);
    }
}
export const UserRender = () => {
    //getProducto(1, RenderProducto);
    //getPokemon("pikachu", RenderPokemon);
    chargeInit();
}
