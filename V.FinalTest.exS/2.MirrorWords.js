function solve([arr]){   // regExp

    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gi;
    
    let match = pattern.exec(arr);

    while(match){
        console.log(match);
        match = pattern.exec(arr)
    }
}
solve([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])
// solve([
//     '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
//   ])