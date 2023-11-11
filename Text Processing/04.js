function solve(input, str) {
    let first = input.split(' ');
    let counter = 0;

    // console.log(first);
   
    for (let word of first) {

        if(word == str){
           counter++
        }

    }
    console.log(counter);
}
solve('This is a word and it also is a sentence',
    'is');
// solve('softuni is great place for learning new programming languages',
// 'softuni'
// );