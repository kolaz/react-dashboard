// App Imports
//import List from '../../modules/portfolio/List'
import Quotes from '../../modules/portfolio/Quotes'
//import ChartComponent from '../../modules/portfolio/Chart'
//import HighChart from '../../modules/portfolio/HighChart'
import Charts from '../../modules/portfolio/Charts'
//import Create from '../../modules/portfolio/Create'

// Pages routes
export default {
  // portfolioList: {
  //   path: '/portfolio/list',
  //   component: List,
  //   auth: true
  // },

  portfolioQuotes: {
    path: '/portfolio/quotes',
    component: Quotes,
    auth: true
  },

  portfolioCharts: {
    path: '/portfolio/charts',
    component: Charts,
    auth: true
  },

  // portfolioChart: {
  //   path: '/portfolio/chart',
  //   component: ChartComponent,
  //   auth: true
  // },

  // portfolioHighChart: {
  //   path: '/portfolio/highchart',
  //   component: HighChart,
  //   auth: true
  // },

  // portfolioCreate: {
  //   path: '/portfolio/create',
  //   component: Create,
  //   auth: true
  // }
}
