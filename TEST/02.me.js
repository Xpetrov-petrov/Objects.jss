function solve(input) {
    let count = input.shift();
    let myObj = {};

    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/;
    for (let izraz of input) {
        let match = izraz.match(pattern);


        if (match){
            myObj[match.groups.name] = match.groups.title;
            let entries = Object.entries(myObj);
    
            for(let entry of entries){
               console.log(`${entry[0]}, The ${entry[1]}`);
               console.log(`>> Strength: ${entry[0].length}`);
               console.log(`>> Armor: ${entry[1].length}`);
            
        }
        if (match) {
           

            
            
        }else{
            console.log(`Access denied!`);
        }
        }
    }
}
solve(['3',
 '|PETER|:#Lead architect#',
 '|GEORGE|:#High Overseer#',
  '|ALEX|:#Assistant Game Developer#'])
   // node TEST/02.me.js
   //Access denided!