import React,{Component} from 'react'
import Divider from '../../assets/images/short_divider.svg'

import "./style.css"

export default class SelectorLayout extends Component{
    constructor(){
        super();
        this.options = ["Mobile","Web"];
        this.state ={selectedItem: 0}
    }

    setSelectedItem = (index) => this.setState({selectedItem : index});

    updateSelectorItems(){
        this.items = [];
        for (let i = 0; i < this.options.length; i++){
            this.items.push(<p className={i === this.state.selectedItem ? "Selector-item" : "Selector-item unselected"} onClick={() => this.setSelectedItem(i)}>{this.options[i]}</p>);
            if (i < this.options.length - 1){
                this.items.push(<img src={Divider} alt="Divider" className="Selector-divider"/>)
            }
        }
    }

    render(){
        this.updateSelectorItems();

        return(
          <div className="Selector-container">
              {this.items}
          </div>
        );
    }
}