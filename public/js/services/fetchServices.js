const urlProduct = "https://localhost:7053/api/producto";
const urlOrder = "https://localhost:7053/api/orden";

export const getProducto = (name, callback) => {
    fetch(`${urlProduct}/${name}`)
    .then ((httpResponse) =>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body);
    })
}
export const getOrder = (callback) => {
    fetch(urlOrder)
    .then ((httpResponse) =>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body);
    })
}