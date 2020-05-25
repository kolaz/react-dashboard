// Imports
import axios from 'axios'

// App Imports
import { getLatestQuotes, getHisQuotes, getPortfolioList, getPortfolioDetails } from '../../../../setup/api/portfolio'
import { MESSAGE_SHOW } from '../../../common/api/actions'
import { PORTFOLIO_LIST_CACHE, QUOTES_LIST_CACHE, STOCK_HIS_CACHE } from './cache-keys'
import { LIST_REQUEST, LIST_RESPONSE, LIST_DONE, QUOTE_RESPONSE, STOCK_RESPONSE } from './types'

// Actions

// Get list
export function list(isLoading = true) {
  return async dispatch => {
    // Caching
    try {
      const list = JSON.parse(sessionStorage.getItem(PORTFOLIO_LIST_CACHE))

      if(list) {
        dispatch({
          type: LIST_RESPONSE,
          list
        })
      } else {
        dispatch({
          type: LIST_REQUEST,
          isLoading
        })
      }
    } catch(e) {
      dispatch({
        type: LIST_REQUEST,
        isLoading
      })
    }

    try {
      const { data } = await getPortfolioList({
        operation: 'portfolioList',
        fields: ['_id', 'portfolio', 'createdAt']
      })

      if(!data.success) {
        dispatch({
          type: MESSAGE_SHOW,
          success: data.success,
          message: data.message
        })
      } else {
        const list = data.data

        dispatch({
          type: LIST_RESPONSE,
          list
        })

        sessionStorage.setItem(PORTFOLIO_LIST_CACHE, JSON.stringify(list))
      }
    } catch(error) {
      dispatch({
        type: MESSAGE_SHOW,
        success: false,
        message: error.message
      })
    } finally {
      dispatch({
        type: LIST_DONE,
        isLoading: false
      })
    }
  }
}


// Get quotes
export function quotes(isLoading = true) {
  return async dispatch => {
    // Caching
    try {
      const quotes = JSON.parse(sessionStorage.getItem(QUOTES_LIST_CACHE))

      if(quotes) {
        dispatch({
          type: QUOTE_RESPONSE,
          quotes
        })
      } else {
        dispatch({
          type: LIST_REQUEST,
          isLoading
        })
      }
    } catch(e) {
      dispatch({
        type: LIST_REQUEST,
        isLoading
      })
    }

    try {
      
      const data = await getLatestQuotes()

      if(data) {
        const quotes = data

        dispatch({
          type: QUOTE_RESPONSE,
          quotes
        })

        sessionStorage.setItem(QUOTES_LIST_CACHE, quotes)
        
      } else {
        dispatch({
          type: MESSAGE_SHOW,
          success: data.success,
          message: data.message
        })
      }
    } catch(error) {
      dispatch({
        type: MESSAGE_SHOW,
        success: false,
        message: error.message
      })
    } finally {
      dispatch({
        type: LIST_DONE,
        isLoading: false
      })
    }
  }
}

// Get stocks
export function stocks(isLoading = true) {
  return async dispatch => {
    // Caching
    try {
      const stocks = JSON.parse(sessionStorage.getItem(STOCK_HIS_CACHE))

      if(stocks) {
        dispatch({
          type: STOCK_RESPONSE,
          stocks
        })
      } else {
        dispatch({
          type: LIST_REQUEST,
          isLoading
        })
      }
    } catch(e) {
      dispatch({
        type: LIST_REQUEST,
        isLoading
      })
    }

    try {
      
      const data = await getHisQuotes()

      if(data) {
        const stocks = data
        dispatch({
          type: STOCK_RESPONSE,
          stocks
        })

        sessionStorage.setItem(STOCK_HIS_CACHE, stocks)
        
      } else {
        dispatch({
          type: MESSAGE_SHOW,
          success: data.success,
          message: data.message
        })
      }
    } catch(error) {
      dispatch({
        type: MESSAGE_SHOW,
        success: false,
        message: error.message
      })
    } finally {
      dispatch({
        type: LIST_DONE,
        isLoading: false
      })
    }
  }
}

// Get detail
export function detail({ portfolioId }) {
  return dispatch => {
    return getPortfolioDetails( {
      operation: 'portfolioDetail',
      params: { portfolioId }
    })
  }
}
