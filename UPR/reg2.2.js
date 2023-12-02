
function solve(input) {
    let participants = input.shift().split(', ');
    let command = input.shift();
    let racerDistances = {};

    let letterPattern = /[a-zA-Z]/g;
    let digitPattern = /\d/g;

    participants.forEach(participant => racerDistances[participant] = 0);

    while (command !== 'end of race') {
        let name = command.match(letterPattern).join('');
        let distances = command.match(digitPattern).map(Number);
        let distance = distances.reduce((acc, num) => acc + num, 0);

        if (participants.includes(name)) {
            racerDistances[name] += distance;
        }

        command = input.shift();
    }

    let sortedRacers = Object.entries(racerDistances).sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < Math.min(sortedRacers.length, 3); i++) {
        let place = i + 1;
        console.log(`${place}${getOrdinalSuffix(place)} place: ${sortedRacers[i][0]}`);
    }
}

function getOrdinalSuffix(number) {
    if (number === 1) {
        return 'st';
    } else if (number === 2) {
        return 'nd';
    } else if (number === 3) {
        return 'rd';
    } else {
        return 'th';
    }
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