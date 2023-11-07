function WordTracker(arr) {
    let searchedWords = arr.shift().split(' ');
    let objecta = {};

    for (let word of searchedWords) {
        objecta[word] = 0;
    }

    for (let word of arr) {
        if (word in objecta) {
            objecta[word]++;
        }
    }
    let entries = Object.entries(objecta).sort((a,b) => b[1] - a[1]); // сортираме в нисходящ ред

    for(let [word,repeats] of entries){
        console.log(`${word} - ${repeats}`);
    }
}
WordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);