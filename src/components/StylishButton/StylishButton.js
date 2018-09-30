import React, { Component } from 'react';
import './stylishbutton.css';

class StylishButton extends Component { 

    render() {
        return(
            <button 
                className={this.props.btnLarge ? "stylishButton large" : "stylishButton small"}
                onClick={this.props.handleClick}>
                {this.props.btnText}
            </button>
        )
    }

}

export default StylishButton;