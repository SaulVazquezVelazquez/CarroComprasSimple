import { Component } from 'react';
import Productos from './components/Productos'
import ProductosEle from './components/ProductosEle'
import ProductosTe from './components/ProductosTe'

class App extends Component {

  state = {
    productos : [
      {nombre : 'Tomate' , price : 1500 , img : '/productos/tomate.jpg' }, 
      {nombre : 'Arbejas' , price : 2500 , img : '/productos/arbejas.jpg' }, 
      {nombre : 'Lechuga' , price : 500 , img : '/productos/lechuga.jpg' }, 
    ],
    productosEle : [
      {nombre : 'Samsung' , price : 3400 , img : '/productos/sam.jpg'},
      {nombre : 'iphone' , price : 3400 , img : '/productos/iphone.jpg'},
      {nombre : 'Huawei' , price : 3400 , img : '/productos/huawei.jpg'}
    ],
    productosTe : [
      {nombre : 'Nike J1' , price : 4500 , img : '/productos/nike.jpg'},
      {nombre : 'Adidas Yeezzy' , price : 3500 , img : '/productos/adidas.jpg'},
      {nombre : 'Reebok' , price : 2500 , img : '/productos/reebok.jpg'},
    ]
  }

  render(){
    return(
      <div>
          <Productos 
          agregarAlCarro={() => console.log("No hace nada") }
          productos={this.state.productos}
          />

          <ProductosEle 
          agregarAlCarroEle={() => console.log("No hace nada Ele")}
          productosEle={this.state.productosEle}
          />

          <ProductosTe 
          agregarAlCarroTe = {() => console.log("No hace nada Te")}
          productosTe = {this.state.productosTe}
          />

          
      </div>
    )
  }

}

export default App;
