function revealwords(wordsStr, text){
    let words = wordsStr.split(', ');

    for(let word of words){
        let repeatCount = word.length;
        
        let startTemplate = '*'.repeat(repeatCount);
        text = text.replace(startTemplate, word)
    }
 console.log(text);
}
revealwords('great, learning',
'softuni is ***** place for ******** new programming languages');