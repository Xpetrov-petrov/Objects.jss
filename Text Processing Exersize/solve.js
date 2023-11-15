function solve(str) {

    let buff = '';
    currentLetter = '';

    for (let letter of str) {

       if(currentLetter !== letter){
        buff += letter;
        currentLetter = letter;
       }
    }
    console.log(buff);
}
solve('aaaaabbbbbcdddeeeedssaa')