import { Component } from "react";
import ButtonEle from "./ButtonEle.js";

const style = {
    producto : {
        border : 'solid 1px #eee',
        boxShadow : '0 5px 5px rgb(0,0,0,0.1)',
        width : '30%',
        padding: '10px 15px',
        borderRadius: '5px'
    },
    img : {
        width : '100%'
    }
}

class ProductoEle  extends Component{
    render(){
        const {productoEle , agregarAlCarroEle} = this.props
        return(
            <div style={style.producto}>
                <img style={style.img} alt={productoEle.nombre} src={productoEle.img} />
                <h3>{productoEle.nombre}</h3>
                <p>$ {productoEle.price}</p>
                <ButtonEle onClick={() => agregarAlCarroEle(productoEle)}>
                    Agregar Al Carro Ele
                </ButtonEle>
            </div>
        )
    }
}

export default ProductoEle