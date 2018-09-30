import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component { 

    render() {
        return(
            <div className="navigation-container">
                <div className="menu-button" onClick={this.props.toggleMenu}>
                    menu &#9776;
                </div>

                {
                    this.props.showMenu ?
                (
                <div className="menu-list">
                    <div className="navigation-item">
                        components &#8250;
                    </div>
                    <div className="navigation-item">
                        me &#8250;
                    </div>
                    <div className="navigation-item">
                        contact &#8250;
                    </div>
                </div>
                ) :
                    null 
                }
            </div>
        )
    }

}

export default Navigation;
