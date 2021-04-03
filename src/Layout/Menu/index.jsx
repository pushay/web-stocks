import React from 'react';
import  {LinkItem}  from '../../Components/Link';

export const Menu = (props) => {

    return(
        <div className='menu'>
            {props.menu[props.list].map((link, index) => {
                return(
                    <LinkItem key={link+index} linkClass={props.linkClass} link={link} />
                )
            })}
        </div>
    )
}