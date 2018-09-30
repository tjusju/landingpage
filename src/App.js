import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation'
import StylishButton from './components/StylishButton/StylishButton'
import ElegantButton from './components/ElegantButton/ElegantButton'
import BetterImageCarousel from './components/BetterImageCarousel/BetterImageCarousel'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      position: "left",
      btnLarge: true,
      btnText: "click me.",
      showMenu: false
    };
  }

  handleClick = () => {
    console.log("CLICKED")
    this.setState({
      btnText: "Clicked!"
    })
  }

  toggleMenu = () => {
    console.log("MENU TOGGLED")
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    return (
      <div className="app">
        <Navigation 
          toggleMenu={this.toggleMenu}
          showMenu={this.state.showMenu}
          position={this.state.position}
        />

        <StylishButton 
            handleClick={this.handleClick} 
            btnLarge={this.state.btnLarge}
            btnText={this.state.btnText} 
        />

        <StylishButton 
            handleClick={this.handleClick} 
            btnLarge={false}
            btnText={this.state.btnText} 
        />

        <ElegantButton 
            btnText={this.state.btnText} 
        />

        <BetterImageCarousel 
          images={this.state.imageList}
          infinite={true}
          fullscreenOnTap={true}
        />
      </div>
    );
  }
}

export default App;
