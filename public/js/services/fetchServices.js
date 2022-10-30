const urlBase = "https://pokeapi.co/api/v2/pokemon"

export const getPokenInit = () => {

}

export const getPokemon = (name, callback) => {
    fetch(`${urlBase}/${name}`)
    .then ((httpResponse) =>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body);
    })
}