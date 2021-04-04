import React from 'react';
import { Button } from '../Button';

export const StockButtonPanel = () => {
    return(
        <div className='stockButtonPanel'>
            <Button buttonClass='button button--buy' buttonName='buy'/>
            <Button buttonClass='button button--sell' buttonName='sell'/>
        </div>
    )
}