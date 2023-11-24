function solve(input) {
    let searchedWords = input.shift().split(' ');
    let objecta = {};

    for (let word of searchedWords) {
        objecta[word] = 0;
    }
    
    for (let word of input) {           
         if(word in objecta){
            objecta[word] ++;
       }
    }

    let entries = Object.entries(objecta).sort((a,b) => b[1] - a[1]);
    for(let [word,repeats] of entries){
        console.log(`${word} - ${repeats}`);
    }

}
solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])