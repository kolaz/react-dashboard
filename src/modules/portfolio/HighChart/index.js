
import React from 'react';
import { render } from 'react-dom';
import { getData } from "./utils"

import HighStock from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";



// UI Imports



class HighChart extends React.Component {
	componentDidMount() {
		getData().then(mockData => {
			this.setState({ mockData })
		})
	}


	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
        <div></div>
		)
	}
}

export default HighChart

