import React from 'react';
import {connect} from 'react-redux';
import { StockButtonPanel } from '../StockButtonPanel';
import {stockInfoType} from '../StockList/StockListText';

const StockInfo = (props) => {

        return(
            <div className='stockInfo'>
                <div className='stockInfo__data'>
                    <h1 className='stockInfo__header'>
                        {stockInfoType['primary'].map((data, index)=> {
                            return(
                                <span key={data+index} className='stockInfo__span'>{data}</span>
                            )
                        })}
                    </h1>
                    <div className='stockInfo__infoContainer'>
                        {stockInfoType['secondary'].map((data, index)=> {
                            return(
                                <p key={data+index} className='stockInfo__text'>{data}:</p>
                            )
                        })}
                        {props.stackInf['data'].map((data)=> {
                            return(
                                <p className='stockInfo__text'>{data}</p>
                            )
                        })}
                    </div>
                </div>
                <StockButtonPanel/>
            </div>
        )
    
}

const mapStateToProps = state => {
    return{
        stockInf:state.stockInfo
    }
}

export default connect(mapStateToProps, null)(StockInfo)