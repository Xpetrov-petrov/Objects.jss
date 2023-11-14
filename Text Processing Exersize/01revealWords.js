function revealwords(wordsStr, text){
    let words = wordsStr.split(', ');

    for(let word of words){
        let repeatCount = word.length;
        
        let startTemplate = '*'.repeat(repeatCount); // repeat - повтори;
        text = text.replace(startTemplate, word) // replace - замени startTemplate с word; 
    }
 console.log(text);
}
revealwords('great, learning',
'softuni is ***** place for ******** new programming languages');