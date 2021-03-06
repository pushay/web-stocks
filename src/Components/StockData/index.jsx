import React, {useEffect, useState} from 'react';
import {stockDataText} from '../StockList/StockListText'
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

const StockData = (props) => {

    const [stockInfo, setStockInfo] = useState({})

    useEffect(()=> {
        cacheFetchData()
    },[])

    const getStockData = () => {
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${props.symbol}&apikey=5DMXB0BMD61LUQWR`)
            .then(response => response.json()).then(data =>{
                if (data){
                    window.localStorage.setItem(props.symbol, JSON.stringify(data['Global Quote']));
                    setStockInfo(data['Global Quote']);
                }
            }
        )
    }

    const getStockInformation = (symbol) => {
        props.onGettingStockInfo(symbol)
    }
    

   const cacheFetchData = () => {
        if (!window.localStorage.getItem(props.symbol)){
            getStockData()
        }
        else {
            setStockInfo(JSON.parse(window.localStorage.getItem(props.symbol)))
        }
    }

    if (stockInfo) {
        return(
            <div>
                 <div className='stockData__tr'>
                    {stockDataText.map((data, index) => { 
                        return(
                            <div key={data+index} className='stockData__container' onClick={data.type == '01. symbol' ? () => {getStockInformation(props.symbol)} : null }>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className={data.classes}>{
                                            stockInfo[data.type]
                                            }</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                            )
                    })}
                </div>
            </div>
        )
    }

    else {
        return null
    }
}


const mapDispatchToProps = dispatch => {
    return{
        onGettingStockInfo:(symbol) => dispatch({
            type:actionTypes.GET_INFO,
            symbol
        })
    }
}

export default connect(null,mapDispatchToProps)(StockData)




