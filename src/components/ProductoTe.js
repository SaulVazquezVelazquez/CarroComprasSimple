import { Component } from "react";
import ButtonTe from './ButtonTe'

const styles = {
    productoTe : {
        border : 'solid 1px #eee',
        boxShadow : '0 px 5px 5px rgb(0,0,0,0.1)',
        width : '30%',
        padding : '10px 15px',
        boderRadius : '5px'
    },
    img : {
        width : '100%'
    }
}

class ProductoTe extends Component {
    render() {
        const {productoTe , agregarAlCarroTe} = this.props
        //console.log(this.props)
        return(
            <div style={styles.productoTe}>
                <img style={styles.img} src={productoTe.img} alt={productoTe.nombre} />
                <h3>{productoTe.nombre}</h3>
                <p>{productoTe.price}</p>
                <ButtonTe onClick = { () => agregarAlCarroTe(productoTe)}>
                Agregar al Carro 
                </ButtonTe>
            </div>
        )
    }
}

export default ProductoTe