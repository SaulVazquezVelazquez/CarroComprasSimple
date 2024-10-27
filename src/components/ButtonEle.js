import { Component } from "react";

const style = {
    button : {
        backgroundColor : '#0A283E',
        color : '#fff' ,
        padding : '15px 20px',
        border : 'none',
        borderRadius : '5px',
        cursor : 'pointer'
    }
}

class ButtonEle extends Component{

    render(){
        //console.log(...this.props);
        
        return(
            <button style={style.button} {...this.props}/>
        )
    }
}

export default ButtonEle