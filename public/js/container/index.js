//Manejador que sabe como renderizar su pagina (container --> component/modules)
//un container para la logica de cada vista
import {cardComponent} from '../components/cardComponent.js'
import { productComponent } from '../components/productComponent.js'
import { getPokemon } from '../services/fetchServices.js'
import { getProducto } from '../services/fetchServices.js'
let _root;
//renderizar imagen (definir objetos js para encontrar la img name)
const RenderPokemon = (json) => {
    _root = document.getElementById("root");
    let name = json.name;
    let img = json.sprites.other["official-artwork"].front_default;
    _root.innerHTML += cardComponent(img,name);
}
const RenderProducto = (json) => {
    _root = document.getElementById("root");
    _root.innerHTML += productComponent(json);
}

const chargeInit = () => {
    alert("renderizando productos");    
    for(var i = 1 ; i <= 10; i++){
        getProducto(i, RenderProducto);
    }
}
export const IndexRender = () => {
    //getProducto(1, RenderProducto);
    //getPokemon("pikachu", RenderPokemon);
    chargeInit();
}

 const searchProducto = (search) => {
    _root.innerHTML = "";
    getProducto(search, RenderProducto)
}
