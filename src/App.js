import { Component } from 'react';
import Productos from './components/Productos'
import ProdcutosTenis from './components/ProdcutosTenis.js'

class App extends Component {

  state = {
    productos : [
      {nombre : 'Tomate' , price : 1500 , img : '/productos/tomate.jpg' }, 
      {nombre : 'Arbejas' , price : 2500 , img : '/productos/arbejas.jpg' }, 
      {nombre : 'Lechuga' , price : 500 , img : '/productos/lechuga.jpg' }, 
    ],
    productosTenis : [
      {nombre : 'Nike' , price : 4500 , img : '/productos/nike.jpg'},
      {nombre : 'Adidas' , price : 3500 , img : '/productos/adidas.jpg'},
      {nombre : 'Reebok' , price : 2500 , img : '/productos/reebok.jpg'}
    ]  
  }

  render(){
    return(
      <div>
          <Productos 
          agregarAlCarro={() => console.log("No hace nada") }
          productos={this.state.productos}
          />   

          <ProdcutosTenis 
          agregarAlCarro = {() => console.log("no hace nada tenis")}
          productosTenis = {this.state.productosTenis}
          />

      </div>
    )
  }

}

export default App;
