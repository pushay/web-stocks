import React from 'react';
import Message from '../Message';
import StockInfo from '../StockInfo';
import {messageText} from '../Message/messageText';


const StockPanel = (props) => {

    if (props.stockInf) {
        return(
            <div className='stockPanel'>
                 <StockInfo/>
            </div>
        )
    }
    
    else {
        return(
            <div className='stockPanel'>
                 <Message messageText={messageText.homeMessage}/>
            </div>
        )
    }
}


export default StockPanel