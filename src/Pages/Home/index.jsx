import React from 'react';
import StockPanel  from '../../Components/StockPanel';
import {StockList} from '../../Components/StockList';

export const Home = () => {

    return(
        <div className='home'>
            <StockList/>
            <StockPanel/>
        </div>
    )
}