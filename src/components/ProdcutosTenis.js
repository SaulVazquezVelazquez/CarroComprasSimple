import { Component } from "react";
import ProductoTenis from "./ProductoTenis.js";

const styles = {
    productoTenis : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
}
class ProdcutosTenis extends Component {
    
    render(){
        const {productosTenis , agregarAlCarro} = this.props
        return(
            <div style={styles.productoTenis}>
                {
                    productosTenis.map(productoTenis => 
                        <ProductoTenis 
                        agregarAlCarro = {agregarAlCarro}
                        key={productoTenis.nombre}
                        productoTenis = {productoTenis}
                        />
                    )
                }
            </div>
        )
    }
}


export default ProdcutosTenis