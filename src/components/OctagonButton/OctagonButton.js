import React from 'react'
import './style.css'

export default ({props}) =>
    <div className="Octagon-button" onClick={props.onClick}>
        <img src={props.image} alt={props.alt} className="Octagon-background"/>
        <p className="Text">{props.text}</p>
    </div>