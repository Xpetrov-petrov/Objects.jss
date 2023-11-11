function solve(text, str){
let censored = '*'.repeat(str.length); // получаваме брой звездички , колкото е дължината на думата , и после заменяме;
let result = text;

while(result.includes(str)){  // докато текста СЪДЪРЖА str
    result = result.replace(str, censored) //str го заменяме със censored;
}
console.log(result);


}
solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden' );
solve('hello world hello', 'hello');