import React from 'react';
import './Popup.scss';

export default function Popup(props) {
    console.log('Popup -> props.image ', props.image);
    //`data:image/png;base64,${props.photo}`
    
    return (
        <div className="overlay">
            <img onClick={props.onClick} src={props.image} className="popup-image" />
        </div>
    )
}