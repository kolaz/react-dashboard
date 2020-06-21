// Imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// UI Imports


// App Imports
import { stocks as getStocks } from '../api/actions/query'
import { STOCK_RESPONSE } from '../api/actions/types'

// Charts
import Chart from './Chart'

// Component
const Charts = ({ classes }) => {
  // state
  const { stocks } = useSelector(state => state.portfolios)
  const dispatch = useDispatch()

  // on component load
  useEffect(() => {
    refresh()
  }, [])


  // refresh
  const refresh = () => {
    dispatch(getStocks())
  }
  
  // render
  return (
    <div>

    </div>
  )
}



export default Charts
