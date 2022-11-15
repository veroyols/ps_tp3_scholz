export const orderDetail = (json) => `
        <section class="detail-order">
            <p> <b>Numero de orden</b>${json.ordenId} <br/>
                <b>Numero de orden</b>${json.carritoId} <br/>
                <b>Fecha</b>${json.fecha} <br/>
                <b>TOTAL: $${json.total} </b><br/>
            </p>
        </section>
        `;
