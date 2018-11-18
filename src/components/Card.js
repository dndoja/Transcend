import React from 'react';
import '../stylesheets/Card.css'

export default ({props}) =>
    <div className="Card-container">
        <img src={props.image} className={"Card-image"} alt={"card-image"}/>
        <p className={"Card-header"}>{props.headerText}</p>
        <p className={"Card-description"}>{props.description}</p>
    </div>