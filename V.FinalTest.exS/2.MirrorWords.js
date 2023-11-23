function mirrorWords([arr]){   // regExp
    arr = arr.split(' ')
    let object = {};
    let counter = 0;

  let pattern = /([#@])\w+\1/;
    for(let word of arr){
       word = word.match(pattern);
       
       if(word){
           
           let secondWord = word[0].split('').reverse().join('');
           let newSecondWord = secondWord.split('').reverse().join('');
        
           if(secondWord == word[0]){
            counter++;
           }
           
       }
     
    }
    console.log(counter);
}
mirrorWords([ '#xxxXxx##xxxXxx# #po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])