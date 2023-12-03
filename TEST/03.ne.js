function solve(array) {
    let heroesObject = {};
 
    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' '); // Split the command into an array
 
        if (command[0] === "End") {
            printHeroes(heroesObject);
            break;
        }
 
        let student = command[1];
 
        switch (command[0]) {
            case 'Enroll':
                if (!heroesObject.hasOwnProperty(student)) {
                    heroesObject[student] = { skills: [] };
                } else {
                    console.log(`${student} is already enrolled.`);
                }
                break;
 
            case 'Learn':
                if (heroesObject.hasOwnProperty(student)) {
                    let skill = command.slice(2).join(' ');
                    if (!heroesObject[student].skills.includes(skill)) {
                        heroesObject[student].skills.push(skill);
                    } else {
                        console.log(`${student} has already learnt ${skill}.`);
                    }
                } else {
                    console.log(`${student} doesn't exist.`);
                }
                break;
 
            case 'Unlearn':
                if (heroesObject.hasOwnProperty(student)) {
                    let skillToRemove = command.slice(2).join(' ');
                    if (heroesObject[student].skills.includes(skillToRemove)) {
                        heroesObject[student].skills = heroesObject[student].skills.filter(s => s !== skillToRemove);
                    } else {
                        console.log(`${student} doesn't know ${skillToRemove}.`);
                    }
                } else {
                    console.log(`${student} doesn't exist.`);
                }
                break;
        }
    }
 
    function printHeroes(heroesObject) {
        console.log("Heroes:");
        for (let hero in heroesObject) {
            let skills = heroesObject[hero].skills.join(', ');
            console.log(`== ${hero}: ${skills}`);
        }
    }
}
solve(["Enroll Stefan",

"Enroll Peter",

"Enroll Stefan",

"Learn Stefan ItShouldWork",

"Learn John ItShouldNotWork",

"Unlearn George Dispel",

"Unlearn Stefan ItShouldWork",

"End"])