export const productComponent = (json) => `
    <div class="product">
        <img class="logo" src="../img/arbol.png">
        <h3 class="title">${json.nombre}</h3>
        <p> ${json.descripcion} ($${json.precio})</p>
        </div>
`