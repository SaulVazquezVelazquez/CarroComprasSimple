import { Component } from 'react';

const styles = {
    button : {
        backgroundColor : '#0A283E',
        color : '#fff',
        border : 'node',
        padding : '15px 20px',
        borderRadius : '5px',
        cursor : 'pointer'
    }
}

class ButtonTe extends Component {

    render () {
        return(
            <button style={styles.button} {...this.props} />
        )
    }
}

export default ButtonTe