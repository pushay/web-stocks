import React from 'react';
import {Menu} from '../Menu';

export const Navigation = (props) => {

    return(
        <div className='navigation'>
            <h1 className='navigation__header'>StockMaster</h1>
            <Menu {...props}/>
        </div>
    )
}