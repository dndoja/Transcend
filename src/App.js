import React, { Component } from 'react';
import logo from './assets/images/transcend_logo_colored.svg';
import title from './assets/images/transcend_title.svg';
import downArrow from './assets/images/transcend_down_arrow.svg'

import './stylesheets/App.css';
import Particles from 'react-particles-js';
import particlesConfig from './assets/particlesjs-config'
import ColoredScrollbars from './components/ColoredScrollbars'

class App extends Component {
  render() {
    return (
        <ColoredScrollbars autoHeight autoHeightMin="100%" autoHeightMax="100%">
            <div className="App">
                    <div className={"Particles-container"}>
                        <Particles params={particlesConfig} className={"Particles"}/>
                        <div className={"Down-arrow-container"}>
                            <img src={downArrow} className={"Down-arrow"} alt={"downArrow"}/>
                        </div>
                    </div>
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <img src={title} className="App-logo-wide" alt="title"/>
                        <p className={"Sub-header"}> Cutting edge software development</p>
                    </div>
            </div>
        </ColoredScrollbars>
    );
  }
}

export default App;
