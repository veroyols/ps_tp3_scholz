import { detail } from "../services/nav.js";

export const productComponent = (json) => `
    <article class="product">
        <img class="product-img" src="https://drive.google.com/uc?export=download&id=${json.image}">
        <h3 class="desc">${json.nombre}</h3>
        <form class="desc">
            <input class="desc-boton" onClick="detail(${json.productoId})" type="submit" id="${json.productoId}" value="+"> 
        </form>         
        <p> ${json.descripcion} ($${json.precio})</p>
        
        </article>
`
