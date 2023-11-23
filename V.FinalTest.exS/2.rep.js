function solve(input) {
    let text = input[0];
    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let match;
    let validPairs = [];
    let mirrorWords = [];

    while ((match = pattern.exec(text)) !== null) {
        let wordOne = match[2];
        let wordTwo = match[3];
        
        if (wordOne === wordTwo.split('').reverse().join('')) {
            validPairs.push(`${wordOne} <=> ${wordTwo}`);
            mirrorWords.push(wordOne, wordTwo);
        }
    }

    if (validPairs.length === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${validPairs.length} word pairs found!`);
    }

    if (mirrorWords.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(validPairs.join(', '));
    }                                                                                    //V.FinalTest.exS/2.rep.js
}

solve([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])
// solve([
//     '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
//   ])