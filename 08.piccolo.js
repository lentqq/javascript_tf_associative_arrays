function piccolo(input) {
    let cars = [];

    for (let dataCar of input) {
        let [direction, carNumber] = dataCar.split(', ');

        switch (direction) {
            case 'IN':
                if (!cars.includes(carNumber)) {
                    cars.push(carNumber);
                }
                break;
            case 'OUT':
                if (cars.includes(carNumber)) {
                    let index = cars.indexOf(carNumber);
                    cars.splice(index, 1);
                }
        }
    }
    let sortedCars = cars.sort((a, b) => a.localeCompare(b));

    if (cars.length <= 0) {
        console.log('Parking Lot is Empty');
    }
    else {
        for (const car of sortedCars) {
            console.log(car);
        }
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])