function solve(arr){

let pattern =  /"[A-Za-z]+"/g;
for(let command of arr){
    command = JSON.parse(command);

let term = Object.keys(command)
let definicion = Object.values(command);
// console.log(definicion.join(''));
// console.log(term.join(''));                                //UPR/06.MakeAdDictionary.js
    console.log(`Term: ${term.join('').sort()} => Definition: ${definicion.join('')}`);
 }    
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
  ])