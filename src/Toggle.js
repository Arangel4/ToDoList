import React, { Component } from 'react';

class Toggle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };
    }
        // Allows the user to turn on or off a button with a click.
        toggle = () => {
            this.setState({isClicked: !this.state.isClicked})
        }

    
    render() {
        return(
          <button onClick={this.toggle}>{this.state.isClicked ? 'Prendido' : 'Apagado'}</button>
        )
    }
}

export default Toggle;