import React from 'react'


function  Button (props) {
    const myClasses = []
    return (
            <div className={myClasses.map(el => `${el.className} `)}>
                <button className={props.className}
                        onClick={props.clickHandler}
                >
                        {props.buttonText}
                </button>
            </div>
    )
}
export default Button;
