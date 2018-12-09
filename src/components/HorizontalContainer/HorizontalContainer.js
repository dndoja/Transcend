import React,{Component} from 'react'
import "./styles.css"
import phone from "../../assets/images/phone.png"

export default class HorizontalContainer extends Component{

    constructor(props){
        super(props);
        this.references = [React.createRef(),React.createRef(),React.createRef(),React.createRef()];
        this.state = {marginSize:16,imageNr:1};
        this.imageWidth = 294;
        this.i = 0;
    }

    scrollTo = (reposition) => {
        if (reposition) {
            this.i = this.i + this.state.imageNr;
            if (this.i >= this.references.length) {
                this.i = 0;
            }
        }
        console.log({imageNr:this.state.imageNr,index:this.i});
        if (this.boxRef) {
            if (reposition) {
                this.boxRef.scrollTo({
                    left: this.boxRef.getBoundingClientRect().width * this.i,
                    behavior: "smooth"
                })
            }else{
                this.boxRef.scrollTo({
                    left: this.i > 0 ? this.references[this.i].current.offsetLeft : 0,
                    behavior: "smooth"
                })
            }
        }
    };

    refCallback = element => {
        if (element){
            this.boxRef = element;
            this.updateDimensions();
        }
    };

    render(){
        this.scrollTo(false);
        return(
            <div className="Horizontal-container-group" onClick={() => this.scrollTo(true)} ref={this.refCallback}>
                    <img className="Horizontal-container-image" src={phone} alt={"Phone"}
                         style={this.state.imageNr <= 1 ?
                             {backgroundColor:'#ff000000',marginLeft:`${ this.state.marginSize / 2}px`, marginRight:`${ this.state.marginSize / 2}px`} :
                             {backgroundColor:'#ff000000',marginRight:`${ this.state.marginSize }px`}}
                         ref={this.references[0]}/>
                    <img className="Horizontal-container-image" src={phone} alt={"Phone"}
                         style={this.state.imageNr <= 1 ?
                        {backgroundColor:'#ffff0000', marginLeft:`${this.state.marginSize / 2}px`, marginRight:`${ this.state.marginSize / 2}px`} :
                        {backgroundColor:'#ffff0000', marginRight:`${ this.state.marginSize }px`}} ref={this.references[1]}/>
                    <img className="Horizontal-container-image" src={phone} alt={"Phone"}
                         style={this.state.imageNr <= 1 ?
                        {backgroundColor:'#ff00ff00' ,marginLeft:`${ this.state.marginSize / 2}px`, marginRight:`${ this.state.marginSize / 2}px`} :
                        {backgroundColor:'#ff00ff00' ,marginRight:`${ this.state.marginSize }px`}} ref={this.references[2]}/>
                    <img className="Horizontal-container-image" src={phone} alt={"Phone"}
                         style={this.state.imageNr <= 1 ?
                             {backgroundColor:'#0000ff00' ,marginLeft:`${ this.state.marginSize / 2}px`, paddingRight:`${ this.state.marginSize / 2}px`} :
                             {backgroundColor:'#0000ff00', marginRight:`${ this.state.marginSize }px`}}
                         ref={this.references[3]}/>
            </div>
        )
    }

    updateDimensions = () => {
        if (this.boxRef) {
            let boxWidth = this.boxRef.getBoundingClientRect().width;
            let imageWidth = this.references[0].current.getBoundingClientRect().width;
            if (imageWidth > 0) {
                this.imageWidth = imageWidth;
            }
            let imageNr = Math.trunc(boxWidth / this.imageWidth);
            if (imageNr > 4){imageNr = 4}
            let contentWidth = this.imageWidth * imageNr;
            let marginSize = Math.ceil((boxWidth - contentWidth) / (Math.max(imageNr - 1,1)));
            this.setState({marginSize:marginSize, imageNr:imageNr});
        }
    };

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}