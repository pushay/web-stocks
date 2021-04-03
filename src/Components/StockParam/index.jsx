import React from 'react';
import { StockParamList } from '../StockList/StockListText';

export const StockParam = () => {

    return(
        <div className='stockParam'>
            <table className='stockParam__table'>
                <tbody>
                    <tr className='stockParam__tr'>
                        {StockParamList.map((param, index)=> {
                            return(
                                <th key={param+index} className={param.classes}>{param.name}</th>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}