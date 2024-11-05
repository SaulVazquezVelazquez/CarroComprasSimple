import { Component } from "react";

const styles = {
    removeButton : {
        backgroundColor : "rgb(255,0,50)",
        color : "#fff",
        padding : "15px 20px",
        border : "none",
        borderRadius : "5px",
        cursor : "pointer",
        marginTop : 5,
        width : "100%"
    },
}

class RemoveButton extends Component{
    render(){
        return(
            <button style= {styles.removeButton} {...this.props}/>
        )
    }
}

export default RemoveButton