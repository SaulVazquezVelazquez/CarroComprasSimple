import { Component } from 'react';
import Productos from './components/Productos'

class App extends Component {

  state = {
    productos : [
      {nombre : 'Tomate' , price : 1500 , img : '/productos/tomate.jpg' }, 
      {nombre : 'Arbejas' , price : 2500 , img : '/productos/arbejas.jpg' }, 
      {nombre : 'Lechuga' , price : 500 , img : '/productos/lechuga.jpg' }, 
    ]
  }

  render(){
    return(
      <div>
          <Productos 
          agregarAlCarro={() => console.log("No hace nada") }
          productos={this.state.productos}
          />
      </div>
    )
  }

}

export default App;
