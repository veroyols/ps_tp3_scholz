const urlBase1 = "https://pokeapi.co/api/v2/pokemon"
const urlBase = "https://localhost:7053/api/producto"

export const getPokenInit = () => {

}
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
export const getPokemon = (name, callback) => {
    fetch(`${urlBase1}/${name}`)
    .then ((httpResponse) =>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body);
    })
}