import React, { Component } from 'react';
import logo from './assets/images/transcend_logo_colored.svg';
import title from './assets/images/transcend_title.svg';
import downArrow from './assets/images/transcend_down_arrow.svg'

import './stylesheets/App.css';
import Particles from 'react-particles-js';
import particlesConfig from './assets/particlesjs-config'
import ColoredScrollbars from './components/ColoredScrollbars'
import Card from './components/Card'
import MobileBlueprint from './assets/images/blueprints/MobileBlueprint.png'
import WebBlueprint from './assets/images/blueprints/WebsiteBlueprint.png'
import UxBlueprint from './assets/images/blueprints/UxBlueprint.png'

class App extends Component {
  render() {
      let desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod ex non elit sollicitudin, in efficitur sapien tincidunt. Aenean in metus semper, ornare purus at, interdum velit. Suspendisse porttitor diam odio, vehicula viverra risus bibendum eu. Donec ut erat nec turpis varius rutrum eu eget orci. ';

      return (
        //<ColoredScrollbars autoHeight autoHeightMin="100%" autoHeightMax="100%">
            <div className="App">
                    <div className={"Particles-container"}>
                        <Particles params={particlesConfig} className={"Particles"}/>
                        <div className={"Down-arrow-container"}>
                            <img src={downArrow} className={"Down-arrow"} alt={"downArrow"}/>
                        </div>
                    </div>
                    <div className="Hero-screen">
                        <img src={logo} className="App-logo" alt="logo" />
                        <img src={title} className="App-logo-wide" alt="title"/>
                        <p className={"Sub-header"}> Cutting edge software development</p>
                    </div>
                    <div className="Full-page-container">
                        <div className="Card-grid">
                            <Card props={{headerText:'Mobile development', description:desc, image:MobileBlueprint}}/>
                            <Card props={{headerText:'Web development', description:desc, image:WebBlueprint}}/>
                            <Card props={{headerText:'UX design', description:desc, image:UxBlueprint}}/>
                        </div>
                    </div>
            </div>
       // </ColoredScrollbars>
    );
  }
}

export default App;
