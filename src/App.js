import React, {Component} from 'react';
import logo from './assets/images/transcend_logo_colored.svg';
import title from './assets/images/transcend_title.svg';
import downArrow from './assets/images/transcend_down_arrow.svg'
import octagon from './assets/images/octagon_button.svg'
import './stylesheets/App.css';
import Particles from 'react-particles-js';
import particlesConfig from './assets/particlesjs-config'
import Card from './components/Card'
import MobileBlueprint from './assets/images/blueprints/MobileBlueprint.png'
import WebBlueprint from './assets/images/blueprints/WebsiteBlueprint.png'
import UxBlueprint from './assets/images/blueprints/UxBlueprint.png'
import {isMobile} from 'react-device-detect'
import {OctagonButton} from './components/OctagonButton'
import {SelectorLayout} from './components/SelectorLayout'

class App extends Component {

    constructor(props){
        super(props);
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
    }

    scrollToFirstScreen = () => {
        window.scrollTo({
            top:this.ref1.current.offsetTop,
            behavior: "smooth"
        })
    };

    scrollToSecondScreen = () => {
        window.scrollTo({
            top:this.ref2.current.offsetTop,
            behavior: "smooth"
        })
    };

    render() {
        let desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod ex non elit sollicitudin, in efficitur sapien tincidunt. Aenean in metus semper, ornare purus at, interdum velit. Suspendisse porttitor diam odio, vehicula viverra risus bibendum eu. Donec ut erat nec turpis varius rutrum eu eget orci. ';
        document.body.style.backgroundColor = '#0F0929';
        let arrowStyle = isMobile ? "Down-arrow-container-mobile" : "Down-arrow-container";
        return (
            <div className="App" >
                <div className={"Particles-container"}>
                    <Particles params={particlesConfig} className={"Particles"}/>
                </div>
                <div className="Hero-screen">
                    <div className="Hero-screen-padding"/>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <img src={title} className="App-logo-wide" alt="title" />
                    <p className={"Sub-header"}> Cutting edge software development</p>
                    <div className={arrowStyle} onClick={this.scrollToFirstScreen} >
                        <img src={downArrow} className={"Down-arrow"} alt={"downArrow"} />
                    </div>
                </div>
                <div className="Full-page-container" ref={this.ref1}>
                    <div className="Card-grid">
                        <Card props={{headerText: 'Mobile development', description: desc, image: MobileBlueprint}}/>
                        <Card props={{headerText: 'Web development', description: desc, image: WebBlueprint}}/>
                        <Card props={{headerText: 'UX design', description: desc, image: UxBlueprint}}/>
                    </div>
                    <OctagonButton props={{text:"View our work", alt:"View our work", image:octagon, onClick:this.scrollToSecondScreen}}/>
                </div>
                <div className="Full-page-container-flat" ref={this.ref2}>
                    <SelectorLayout/>
                </div>
            </div>
        );
    }
}

export default App;
