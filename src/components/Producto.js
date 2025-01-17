import { Component } from "react";
import Button from "./Button";

const styles = {
    producto : {
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

class Producto extends Component{
    render(){
        const {producto , agregarAlCarro} = this.props
        console.log(this.props);
        return(
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.nombre} src={producto.img} />
                <h3>{producto.nombre}</h3>
                <p>${producto.price}</p>
                <Button onClick = { () => agregarAlCarro(producto) } >
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto