export const mostrar = ()=>{
    const show = document.querySelector('.windowProduct');
    /*cuando hago click ejecuta la funcion*/
    show.addEventListener('click', 
        ()=>{
            show.removeAttribute("hidden")
        }   
    )
};
