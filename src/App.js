import { Component } from 'react';
import Productos from './components/Productos'
import ProductosEle from './components/ProductosEle';

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
      </div>
    )
  }

}

export default App;
