//Manejador que sabe como renderizar su pagina (container --> component/modules)
//un container para la logica de cada vista
import { productDetail } from '../components/productDetail.js'
import { getProducto } from '../services/fetchServices.js'
let _root;
//renderizar imagen (definir objetos js para encontrar la img name)
export const RenderProducto = (json) => {
    _root = document.getElementById("root-product");
    _root.innerHTML += productDetail(json);
}

export const ProductRender = () => {
    _root = document.getElementById("root-product");
    getProducto(7, RenderProducto);
}

export const detail = (productoId)=>{
    const boton = document.getElementById(productoId);
    boton.addEventListener('click',() => { 
        console.log(boton);
        getProducto(productoId, RenderProducto);
    })
}; 