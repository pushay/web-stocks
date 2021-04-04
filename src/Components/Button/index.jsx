import React from 'react';

export const Button = (props) => {
    return(
        <div>
            <button className={props.buttonClass}>{props.buttonName}</button>
        </div>
    )
}