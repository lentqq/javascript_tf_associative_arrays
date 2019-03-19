function oddOccurrences(input) {
    input = input.toLowerCase();
    let arrayString = input.split(' ');
    let map = new Map();
    let result = [];

    for (let item of arrayString) {
        map.set(item, 0);
    }

    for (let item of arrayString) {
        if (map.has(item)) {
            let values = map.get(item) + 1;
            map.set(item, values);
        }
    }

    for (const item of [...map]) {
        if (item[1] % 2 !== 0) {
            result.push(item[0]);
        }
    }
    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')