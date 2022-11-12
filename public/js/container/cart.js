//Manejador que sabe como renderizar su pagina (container --> component/modules)
//un container para la logica de cada vista
import { productComponent } from '../components/productComponent.js'
import { getProducto } from '../services/fetchServices.js'
let __busca;
//renderizar imagen (definir objetos js para encontrar la img name)
const RenderProducto = (json) => {
    __busca = document.getElementById("busqueda");
    __busca.innerHTML += productComponent(json);
}
const PrintProduct = () => {
    getProducto(1, RenderProducto);
}
export const ProductRender = () => {
    __busca = document.getElementById("busqueda");
    PrintProduct();
}