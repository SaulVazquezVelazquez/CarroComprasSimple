import { Component } from "react";
import ButtonTenis from './ButtonTenis.js'

const styles = {
    productoTenis : {
        border : 'sold 1px #eee',
        boxShadow : '0 5px 5px rgb(0,0,0,0.1)',
        width  : '30%',
        padding  : '10px 15px',
        borderRadius : '5px'
    },
    img : {
        width : '100%'
    }
}

class ProductoTenis extends Component {
    render () {
        const {productoTenis , agregarAlCarro} = this.props
        return(
            <div style={styles.productoTenis}>
                <img style={styles.img}  src={productoTenis.img} alt={productoTenis.nombre}/>
                <h3>{productoTenis.nombre}</h3>
                <span>${productoTenis.price}</span>
                <ButtonTenis 
                onClick = {() => agregarAlCarro(productoTenis)}>
                    Agrgar al carro
                </ButtonTenis>
            </div>
        )
    }
}

export default ProductoTenis