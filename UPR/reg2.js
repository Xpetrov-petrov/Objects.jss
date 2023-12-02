function solve(input) {
    let keyNames = input.shift().split(', ');
    let command = input.shift();
    let myObj = {};

    let letherPatern = /[a-z]/gi;
    let digitPatern = /[\d]/g;

    keyNames.forEach(keyNames => myObj[keyNames] = 0);

    while (command != 'end of race') {

        let name = command.match(letherPatern).join('');
        let numsAsStrings = command.match(digitPatern);
        let distance = numsAsStrings.map(str => Number(str)).reduce((acc, num) => acc + num, 0);

        if (name in myObj) {
            myObj[name] += distance
        }


        command = input.shift();
    }

    let entries = Object.entries(myObj);
    let sortedEntries = entries.sort((a,b) => b[1] - a[1]);

    console.log(`1st place: ${sortedEntries[0][0]}`);
    console.log(`2nd place: ${sortedEntries[1][0]}`);
    console.log(`3rd place: ${sortedEntries[2][0]}`);

}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])

      // node UPR/reg2.js