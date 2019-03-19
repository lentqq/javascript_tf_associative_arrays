function wordsTracker(array) {
    let searchingWords = array.shift().split(' ');
    let map = new Map();

    for (let word of searchingWords) {
        map.set(word, 0);
    }

    for (let word of array) {
        if (map.has(word)) {
           let values = map.get(word) + 1;
           map.set(word, values);
        }
    }

    [...map].sort((a, b) => b[1] - a[1]).forEach(w => console.log(`${w[0]} - ${w[1]}`));
}

wordsTracker(['this sentence', 'In', 'this', 'sentence', 'you'
    , 'have', 'to', 'count', 'the', 'occurances', 'of'
    , 'the', 'words', 'this', 'and', 'sentence', 'because'
    , 'this', 'is', 'you', 'task'])