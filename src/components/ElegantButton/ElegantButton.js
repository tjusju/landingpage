import React, { Component } from 'react';
import './elegantbutton.css';

class ElegantButton extends Component { 
    constructor(props) {
        super(props);
        
        this.state = { 
          className: "elegantButton"
        };
      }

    clickAnimation = () => {
        this.setState({
            className: "elegantButton clickedElegant"
        })
        setTimeout(this.returnToInitialState, 350)        
    }

    returnToInitialState = () => {
        this.setState({
            className: "elegantButton"
        })
    }

    render() {
        return(
        <div 
            className={this.state.className}
            onClick={this.clickAnimation}
            >
            <div className="circle">
                &#10003;
            </div>
            <div className="button-text">
                {this.props.btnText}
            </div>
        </div>
        )
    }
}

export default ElegantButton;
