// import
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//import Chart'
import * as Highcharts from 'highcharts/highstock'
import { stocks as getStocks } from '../api/actions/query'

// UI Imports
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap'

const HighChart = ({ classes }) => {
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
		createChart()
	}

	const createChart = () => {
		let formatData = [];
		formatData = stocks.map(obj => {
			const date = obj["date"].split("-");
			const dateInSeconds = new Date(date[0], +date[1] -1, date[2]);
			return [dateInSeconds, obj["open"]];
		}).reverse();

		Highcharts.stockChart('chart', {
        rangeSelector: {
        	selected: 1
		},

        title: {
          text: "ACI Stock"
        },
				
        series: [{
			name: 'ACI',
            data: formatData,
            tooltip: {
              valueDecimals: 2
            }
        }]
    });
	}

		
	return (
		<div>
            <h3 className="m-b">New Post</h3>
            <Row>
                <Col md={8}>
                    <Card>
                        <CardBody>
						<div id='chart'></div>
						</CardBody>
                    </Card>
                </Col>
				<Col md={4}>
                    <Card>
                        <CardHeader>Publish</CardHeader>
                        <CardBody>
                            <div>
                                <strong>Status:</strong> Draft
                                </div>
                            <hr />
                            <div>
                                <strong>Word Count:</strong> 329
                            </div>
                            <hr />
                            <div>
                            <FormGroup>
                                <Label for="exampleSelectMulti">Category</Label>
                                <Input type="select" name="select" id="exampleSelect3">
                                    <option>Entertainment</option>
                                    <option>Books</option>
                                    <option>Video</option>
                                    <option>Food</option>
                                    <option>Cars</option>
                                </Input>
                            </FormGroup>
                            </div>
                            <hr />
                            <Button block color="primary">Publish</Button>
                        </CardBody>
                    </Card>
                </Col>
			</Row>
		</div>
	)
	
}

export default HighChart

