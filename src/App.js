import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'

class App extends Component {

  state = {
    productos : [
      {nombre : 'Tomate' , price : 1500 , img : '/productos/tomate.jpg' }, 
      {nombre : 'Arbejas' , price : 2500 , img : '/productos/arbejas.jpg' }, 
      {nombre : 'Lechuga' , price : 500 , img : '/productos/lechuga.jpg' }, 
      {nombre : 'Nike' , price : 4500 , img : '/productos/nike.jpg'},
      {nombre : 'Adidas' , price : 3500 , img : '/productos/nike.jpg'},
      {nombre : 'Reebok' , price : 2500 , img : '/productos/reebok.jpg'}
    ],
    carro: [],
    esCarroVisible : false,
  }

  agregarAlCarro = (producto) => {
    // console.log(producto);
    const {carro} = this.state

    if (carro.find(x => x.nombre === producto.nombre)) {
      const newCarro = carro.map( x => x.nombre === producto.nombre
      ? ({
        ...x ,
        cantidad : x.cantidad + 1
      })
      : x)

      return this.setState({carro : newCarro})
      
    }

    return this.setState({
      carro : this.state.carro.concat({
        ...producto , cantidad : 1 ,
      })
    })
  }
  
  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return  
    }
    this.setState({esCarroVisible : !this.state.esCarroVisible})
  }

  render(){
    const {esCarroVisible} = this.state
    return(
      <div>
          <Navbar  
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro} 
          carro={this.state.carro}/>
          <Layout>
            <Title />
            <Productos 
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
            />   
          </Layout>
          
      </div>
    )
  }

}

export default App;
