function neighborhoods(input) {
    let neighborhoodsData = new Map();
    let neighborhoods = input.shift().split(', ');
    neighborhoods.forEach(n => neighborhoodsData.set(n, []));


    for (const data of input) {
        let [neighborhood, name] = data.split(' - ');

        if (neighborhoodsData.has(neighborhood)) {
            let people = neighborhoodsData.get(neighborhood);
            people.push(name);
            neighborhoodsData.set(neighborhood, people);
        }
    }

    let sortedNeighborhoodsData = [...neighborhoodsData.entries()];
    sortedNeighborhoodsData.sort((a, b) => b[1].length - a[1].length);

    for (let [neighborhoodName, neighbors] of sortedNeighborhoodsData) {
        console.log(`${neighborhoodName}:${neighbors.length}`);

        for (let neighborName of neighbors) {
            console.log(`--${neighborName}`);
        }
    }
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'])