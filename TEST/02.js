function solve(input) {
    let numberOfInputs = Number(input[0]);

    for (let i = 1; i <= numberOfInputs; i++) {
        let currentInput = input[i].trim();

        let pattern = /^\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#$/;
        let match = currentInput.match(pattern);

        if (match) {
            let name = match.groups.name;
            let title = match.groups.title;

            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log("Access denied!");
        }
    }
}

solve(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#']);