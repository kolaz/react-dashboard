import { callAPI } from './base';

// Get stock quotes
export const getLatestQuotes = () => callAPI(`/api/quotes/all/`);

// Get historical stock quotes
export const getHisQuotes = () => callAPI(`/api/stocks/aci/`);

// Get portfolio list
export const getPortfolioList = data => callAPI(`/api/portfolio/`, 'post', data);

// Get portfolio details
export const getPortfolioDetails = data => callAPI(`/api/portfolio/`, 'post', data);