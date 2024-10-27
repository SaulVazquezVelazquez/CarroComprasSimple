import { Component } from "react";
import ProductoTe from "./ProductoTe";

const styles = {
    productosTe : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
}


class ProductosTe extends Component{
    render(){
        const {productosTe , agregarAlCarroTe} = this.props
        
        console.log(this.props);
        

        return(
            <div style={styles.productosTe}>
                {
                    productosTe.map(productoTe => 
                        <ProductoTe 
                        key = {productoTe.nombre}
                        agregarAlCarroTe = {agregarAlCarroTe}
                        productoTe = {productoTe}
                        />
                    )
                }
            </div>
            
        )
    }
}

export default ProductosTe