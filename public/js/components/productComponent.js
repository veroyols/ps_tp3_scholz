export const productComponent = (json) => `
    <article class="product">
        <img src="https://drive.google.com/uc?export=download&id=${json.image}">
        <h3>${json.nombre}</h3>
        <p> ${json.descripcion} ($${json.precio})</p>
        </article>
`