export const productDetail = (json) => `
    <section class="detail-product">
        <img class="product-img" src="https://drive.google.com/uc?export=download&id=${json.image}">
        <article class="product-description">
            <h3 class="desc" "desc-det">${json.nombre}</h3>
            <p> ${json.descripcion} <b>($${json.precio})</b> <br/>
                Codigo: ${json.codigo} <br/>
                Marca: ${json.marca} <br/>            
            </p>
            <form class="comprar">
                Cantidad (entre 1 y 10):
                <input type="number" min="1" max="10">
                <input type="submit" value="Add Cart"> 
            </form>         
        </article>
    </section>
`
