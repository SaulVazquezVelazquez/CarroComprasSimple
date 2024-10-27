import { Component } from "react";

const styles = {
    title : {
        marginButtom : '30',
    }
}

class Title extends Component{
    render(){
        return(
            <h1 style={styles.title}>Tienda</h1>
        )
    }
}

export default Title