import * as actionTypes from '../actions';

const initialState = {
    stockInfo:{}
}

const getStockInfo = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.GET_INFO:
            fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${action.symbol}&apikey=5DMXB0BMD61LUQWR`)
            .then(response => response.json()).then((data => Object.assign(initialState.stockInfo, data)))
            return {
                ...state.stockInfo
            }
        default:return state
    }
}

export default getStockInfo