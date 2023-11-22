function solve(arr) {
    let names = arr.shift().split(', ');
    let command = arr.shift();
    let result = {};    //object

    let letterPattern = /[A-Za-z+]/g;                    // !!!!
    let digitPatern = /[\d+]/g;

    names.forEach(name => result[name] = 0);
    //въртим през масива names и да зададе всяко име като свойство в обекта result със стойност 0;

    while (command != 'end of race') {

        let letterMatches = command.match(letterPattern);   // !!!
        //с .match() става магията с regEx-a
        let digitMatches = command.match(digitPatern);
        let distance = digitMatches.map(Number).reduce((a, b) => a + b);


        let name = letterMatches.join('');

        if (name in result) {
            result[name] += distance;                                // RegularExpressions/02.Race.ex.js
        }

        command = arr.shift();
    }
    let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

        //   console.log(sortedResult);
        //   console.log(Object.entries(result));
    console.log(`1st place: ${sortedResult[0][0]}`);
    console.log(`2nd place: ${sortedResult[1][0]}`);
    console.log(`3rd place: ${sortedResult[2][0]}`);
}
solve(['George, Peter, Bill, Tom',                           //RegularExpressions\02.ex.js
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])