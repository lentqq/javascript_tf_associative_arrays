function wordOccurrences(input) {
    let map = new Map();

    for (const word of input) {
        map.set(word, 0);
    }
 
    for (const word of input) {

        if (map.has(word)) {
        let count =  map.get(word) + 1;
        map.set(word, count);
        }
    }
     [...map].sort((a, b) => b[1] - a[1]).forEach(w => console.log(`${w[0]} -> ${w[1]}`));
}

wordOccurrences(['Here', 'is', 'the', 'first', 'sentence'
    , 'Here', 'is', 'another', 'sentence'
    , 'And', 'finally', 'the', 'third', 'sentence'])