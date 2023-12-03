function solve(input) {
    let numberOfInputs = Number(input[0]);
    
    for (let i = 1; i <= numberOfInputs; i++) {
        let currentInput = input[i].trim();

        let nameRegex = /^\|([A-Z]+)\|:#([A-Za-z]+ [A-Za-z]+)#$/;
        let match = currentInput.match(nameRegex);

        if (match) {
            let name = match[1];
            let title = match[2];

            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${name.length * 2 + title.length}`);
        } else {
            console.log("Access denied!");
        }
    }
}


solve([
    '3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'
]);