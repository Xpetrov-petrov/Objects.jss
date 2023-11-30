function solve(arr){
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
    let entries = Object.entries(objecta).sort((a,b) => b[1] - a[1]);

    for(let [word,repeats] of entries){
        console.log(`${word} - ${repeats}`);
    }

}
solve([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']
    )