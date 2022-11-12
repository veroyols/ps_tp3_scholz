const urlBase = "https://localhost:7053/api/producto";

export const getProducto = (name, callback) => {
    fetch(`${urlBase}/${name}`)
    .then ((httpResponse) =>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body);
    })
}
