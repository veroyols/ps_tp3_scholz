//Manejador que sabe como renderizar su pagina (container --> component/modules)
//un container para la logica de cada vista
import { orderDetail } from '../components/orderDetail.js'
import { getOrder } from '../services/fetchServices.js'
let _root;
//renderizar imagen (definir objetos js para encontrar la img name)
export const RenderOrder = (array) => {
    _root = document.getElementById("root-order");
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        _root.innerHTML += orderDetail(element);    
    }
}

/*while(productos[i] != undefined)*/

export const OrderRender = () => {
    _root = document.getElementById("root-order");
    getOrder(RenderOrder);
}
