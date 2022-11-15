/*import { getProducto } from "../fetchServices.js";*/

export const hacerClic = () => {
    const buscar = document.querySelector('.search');
    /*cuando hago click ejecuta la funcion*/
    buscar.addEventListener('click',() => { alert('click')})
};
