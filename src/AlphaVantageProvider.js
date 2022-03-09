import axios from 'axios';

const API_KEY = '16RM7YB3WU85H52Z'

export const getIncomeStatements = async (symbol) => {
    const term = symbol.toUpperCase().trim();
    return await axios.get(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${term}&apikey=${API_KEY}`)
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}

export const symbolSearch = async (searchTerm) => {
    return await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=16RM7YB3WU85H52Z`)
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}

export const getMarketTelemetryData = async () => {
    /** 
        "GDP": 0,
        "GDP Per Capita": 0, 
        "Treasury Yield": 0,
        "Federal Funds Interest Rate": 0,
        "Consumer Price Index": 0,
        "Inflation": 0,
        "Expected Inflation": 0,
        "Consumer Sentiment": 0,
        "Retail Sales": 0,
        "Durable Goods Orders": 0, 
        "Unemployment Rate": 0
     * **/
    
    // promises must be called or it'll just return the promise function code
    const arrayOfPromises = [
        getGDP(),
        getGDPPerCapita(),
        getTreasuryYield(),
        getFederalFundsInterestRate(),
        getConsumerPriceIndex(),
        getUnemploymentRate(),
        getInflationRate(),
        getExpectedInflationRate(),
        getConsumerSentiment(),
        getRetailSales(),
        getDurableGoodsOrders(),
        getNonfarmPayroll()
    ]

    return await axios.all(arrayOfPromises)
        .then(res => {
            //console.log(res);
            let results = [];

            res.map((x) => {
                //console.log(x.data, i);
                // res.data.data
                // array.object.object
                results.push({
                    data: x.data.data, 
                    interval: x.data.interval, 
                    name: x.data.name, 
                    unit: x.data.unit
                })
            });
            //console.log(results);
            return results
        })
        .catch(err => console.log(err));
}

// Individual Promises
export const getGDP = async () => {
    return await axios.get('https://www.alphavantage.co/query?function=REAL_GDP&interval=annual&apikey=demo')
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}

export const getGDPPerCapita = async () => {
    return await axios.get('https://www.alphavantage.co/query?function=REAL_GDP_PER_CAPITA&apikey=demo')
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}

export const getTreasuryYield = async () => {
    return await axios.get('https://www.alphavantage.co/query?function=TREASURY_YIELD&interval=monthly&maturity=10year&apikey=demo')
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}

export const getFederalFundsInterestRate = async () => {
    return await axios.get('https://www.alphavantage.co/query?function=FEDERAL_FUNDS_RATE&interval=monthly&apikey=demo')
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}

export const getConsumerPriceIndex = async () => {
    return await axios.get('https://www.alphavantage.co/query?function=CPI&interval=monthly&apikey=demo')
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}

export const getInflationRate = async () => {
    return await axios.get('https://www.alphavantage.co/query?function=INFLATION&apikey=demo')
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}

export const getExpectedInflationRate = async () => {
    return await axios.get('https://www.alphavantage.co/query?function=INFLATION_EXPECTATION&apikey=demo')
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}

export const getConsumerSentiment = async () => {
    return await axios.get('https://www.alphavantage.co/query?function=CONSUMER_SENTIMENT&apikey=demo')
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}

export const getRetailSales = async () => {
    return await axios.get('https://www.alphavantage.co/query?function=RETAIL_SALES&apikey=demo')
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}

export const getDurableGoodsOrders = async () => {
    return await axios.get('https://www.alphavantage.co/query?function=DURABLES&apikey=demo')
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}

export const getUnemploymentRate = async () => {
    return await axios.get('https://www.alphavantage.co/query?function=UNEMPLOYMENT&apikey=demo')
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}

export const getNonfarmPayroll = async () => {
    return await axios.get('https://www.alphavantage.co/query?function=NONFARM_PAYROLL&apikey=demo')
                        //.then(res => console.log(res))
                        .catch(err => console.log(err));
}