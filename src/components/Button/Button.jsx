import React, {useState} from 'react'


function  Button (props) {

    return (
        <div>
            <button className='app-button' onClick={props.clickHandler}>{props.buttonText}</button>
        </div>
    )
}
export default Button;
