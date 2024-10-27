import { Component } from "react";
import ProductoEle from "./ProductoEle"

const styles = {
    productosEle : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
}

class ProductosEle extends Component {
    render(){
        const {productosEle , agregarAlCarroEle} = this.props
        return(
            <div style={styles.productosEle}>
                {
                    productosEle.map(productoEle => 
                       <ProductoEle 
                        agregarAlCarroEle = {agregarAlCarroEle}
                        key = {productoEle.nombre}
                        productoEle = {productoEle}
                        />
                    )
                    
                }
            </div>
        )
    }
}


export default ProductosEle