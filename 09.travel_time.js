function travelTime(input) {
    let countriesMap = new Map();
    
    for (const data of input) {
        let [country, town, price] = data.split(' > ');
        
        if (!countriesMap.has(country)) {
            let townsAndPriceMap = new Map();
            townsAndPriceMap.set(town, price);
            countriesMap.set(country, townsAndPriceMap);
        }
    }
    console.log(countriesMap);
}

travelTime(['Bulagaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000', 'Albania > Tirana > 1000', 'Bulgaria > Sofia > 200'])