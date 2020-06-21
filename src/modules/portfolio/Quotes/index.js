// Imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// UI Imports
import {
  Row,
  Card,
  Col,
  CardBody,
  Table
} from 'reactstrap'

// App Imports
import { quotes as getQuotes } from '../api/actions/query'
import EmptyMessage from '../../common/EmptyMessage'

// Component
const Quotes = ({ classes }) => {
  // state
  const { isLoading, quotes } = useSelector(state => state.portfolios)
  const dispatch = useDispatch()

  // on component load
  useEffect(() => {
    refresh()
  }, [])

  // refresh
  const refresh = () => {
    dispatch(getQuotes())
  }

  // render
  return (
    <div className="table-responsive-md">
    <Row>
    <Col xs={8}>
       {
          quotes.length === 0
            ? <EmptyMessage message={'No quotes yet.'} />
            : <Card className="card-box mb-5">
            <CardBody>
                <Table hover responsive bordered striped>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Ltp</th>
                            <th>Ycp</th>
                            <th>High</th>
                            <th>Low</th>
                            <th>Close</th>
                            <th>Change</th>
                            <th>Trade</th>
                            <th>Value (mn)</th>
                            <th>Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quotes.map((row) => (
                        <tr>
                        <td>{row.symbol}</td>
                        <td>{row.ltp}</td>
                        <td>{row.ycp}</td>
                        <td>{row.high}</td>
                        <td>{row.low}</td>
                        <td>{row.close}</td>
                        <td>{row.change}</td>
                        <td>{row.trade}</td>
                        <td>{row.value}</td>
                        <td>{row.volume}</td>
                      </tr>
                      ))}
                    </tbody>
                </Table>
                </CardBody>
              </Card>
        }
    </Col>
    </Row>
    </div>
  )
}


export default Quotes
