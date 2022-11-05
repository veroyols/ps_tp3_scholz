//Manejador que sabe como renderizar su pagina (container --> component/modules)
//un container para la logica de cada vista
import { listProduct, productComponent } from '../components/productComponent.js'
import { getProducto } from '../services/fetchServices.js'
let _root;
let _list;
//renderizar imagen (definir objetos js para encontrar la img name)
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
 const searchProducto = (e) => {
    _root.innerHTML = "";
    getProducto(search, RenderProducto)
}
export const IndexRender = () => {
    _root = document.getElementById("root");
    chargeInit();
    //getProducto(1, RenderProducto);
    //getPokemon("pikachu", RenderPokemon);
}