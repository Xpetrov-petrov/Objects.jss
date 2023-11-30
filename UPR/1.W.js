function solve(arr){
    let obj1 = {};
let [firstWord, secondWord] = arr.shift().split(' ');
let counter1 = 0;
let counter2 = 0;
for(let word of arr){
    if(word == firstWord){
        counter1++
        obj1[firstWord] = counter1

    }
    if(word == secondWord){
        counter2++
        obj1[secondWord] = counter2
    }
    
}
let entries = Object.entries(obj1);
    entries.sort((a,b) => b[1] - a[1]);
    for(let [word, count] of entries){
        console.log(`${word} - ${count}`);
    }
}
solve([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']
    ) 



    // беттер
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
        let entries = Object.entries(objecta).sort((a,b) => b[1] - a[1]);
    
        for(let [word,repeats] of entries){
            console.log(`${word} - ${repeats}`);
        }
    }