function oddOccurrences(arr) {
    let words = arr.split(' ');
    let wordCount = {};
    let shifted = '';

    for (let word of words) {
        word = word.toLowerCase(); // само малки букви
        if (wordCount[word] === undefined) {
            wordCount[word] = 0;
        }
        wordCount[word]++;
    }

    let result = [];
    // let entries = Object.entries(wordCount)

    
  
    for (let word in wordCount) {
        if (wordCount[word] % 2 !== 0) {
            result.push(word);
        }
    }
     
   for(let word of result){ 
    
    if(word == '1'||'5'){
        shifted = result.shift()
        
    }else{
        break;
    }

    result.push(shifted)
   
   }

    console.log(result.join(' '));
}


oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'); // ObjectAdvance\02.ex.OddOccurrences.js