import React from 'react';
import {HomeStockList} from './StockListText';
import {StockData} from '../StockData';
import { StockParam } from '../StockParam';

export const StockList = () => {

    return(
        <div className='stockList'>
                <div className='stockList__table'>
                    <StockParam/>
                    {HomeStockList.map((stockSymbol, index) => {
                        return(
                            <StockData  key={stockSymbol+index} symbol={stockSymbol} />
                        )
                    })}
                </div> 
        </div> 
    )
}