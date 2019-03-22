function travelTime(input) {
    let countriesMap = new Map();

    for (const data of input) {
        let [country, town, price] = data.split(' > ');
        
        if (!countriesMap.has(country)) {
            let townsAndPriceMap = new Map();
            townsAndPriceMap.set(town, price);
            countriesMap.set(country, townsAndPriceMap);
        }
        else {
            let existingTown = countriesMap.get(country);
            
            if (existingTown.has(town)) {
                let existingPrice = existingTown.get(town);

                if (price < existingPrice) {
                    existingTown.set(town, price);
                }
            }
            else {
                existingTown.set(town, price);
            }
        }
    }
    let sortedCountries = [...countriesMap].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [country, townsMap] of sortedCountries) {

        let sortedTowuns = [...townsMap].sort((a, b) => a[1] - b[1]).map(element => `${element[0]} -> ${element[1]}`);
        console.log(`${country} -> ${sortedTowuns}`);
    }
}

travelTime(['Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000', 'Albania > Tirana > 1000', 'Bulgaria > Sofia > 200'])