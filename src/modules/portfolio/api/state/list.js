// App Imports
import { LIST_DONE, LIST_REQUEST, LIST_RESET, LIST_RESPONSE, QUOTE_RESPONSE, STOCK_RESPONSE, DATA_RESPONSE} from '../actions/types'

// List

// Initial State
const portfoliosInitialState = {
  isLoading: false,
  list: [],
  quotes: [],
  stocks: [],
  data: []
}

// State
export default (state = portfoliosInitialState, action) => {
  switch (action.type) {
    case LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading
      }

    case LIST_RESPONSE:
      return {
        ...state,
        list: action.list
      }

      case QUOTE_RESPONSE:
      return {
        ...state,
        quotes: action.quotes
      }

      case STOCK_RESPONSE:
      return {
        ...state,
        stocks: action.stocks
      }

      case DATA_RESPONSE:
      return {
        ...state,
        data: action.data
      }

    case LIST_DONE:
      return {
        ...state,
        isLoading: false
      }

    case LIST_RESET:
      return { ...portfoliosInitialState }

    default:
      return state
  }
}
