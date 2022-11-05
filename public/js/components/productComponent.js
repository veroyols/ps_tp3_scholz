export const productComponent = (json) => `
    <article class="product">
        <img class="product-img" src="https://drive.google.com/uc?export=download&id=${json.image}">
        <h3 class="desc">${json.nombre}</h3>
        <p class="desc"> ${json.descripcion} ($${json.precio})</p>
        </article>
`
export const listProduct = (json) => `
    <li class="itemProduct">${json.nombre}</li>
`