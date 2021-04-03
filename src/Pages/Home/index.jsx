import React from 'react';
import { StockInfo } from '../../Components/StockInfo';
import {StockList} from '../../Components/StockList';

export const Home = () => {

    return(
        <div className='home'>
            <StockList/>
            <StockInfo/>
        </div>
    )
}