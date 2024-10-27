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
    ]
  }

  render(){
    return(
      <div>
          <Navbar />
          <Layout>
            <Title />
            <Productos 
            agregarAlCarro={() => console.log("No hace nada") }
            productos={this.state.productos}
            />   
          </Layout>
          
      </div>
    )
  }

}

export default App;
