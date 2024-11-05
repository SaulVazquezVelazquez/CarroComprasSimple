import { Component } from "react";
import Producto from "./Producto.js"

const styles = {
    productos : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
}

class Productos extends Component{

    render() {
        const {productos , agregarAlCarro , quitarDelCarro} = this.props

        return(
            <div style={styles.productos}>
            {
                productos.map(producto => 
                    <Producto 
                    agregarAlCarro = {agregarAlCarro}
                    key = { producto.nombre }
                    producto = {producto}
                    quitarDelCarro = {quitarDelCarro}
                    />
                )
            }
            </div>
        )

    }

}

export default Productos;