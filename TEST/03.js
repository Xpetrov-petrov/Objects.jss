function solve(input) {
    let heroes = {};

    for (let command of input) {
        if (command === "End") {
            break;
        }

        let [action, heroName, spellName] = command.split(' ');

        switch (action) {
            case "Enroll":
                if (!heroes.hasOwnProperty(heroName)) {
                    heroes[heroName] = [];
                } else {
                    console.log(`${heroName} is already enrolled.`);
                }
                break;

            case "Learn":
                if (heroes.hasOwnProperty(heroName)) {
                    if (!heroes[heroName].includes(spellName)) {
                        heroes[heroName].push(spellName);
                    } else {
                        console.log(`${heroName} has already learnt ${spellName}.`);
                    }
                } else {
                    console.log(`${heroName} doesn't exist.`);
                }
                break;

            case "Unlearn":
                if (heroes.hasOwnProperty(heroName)) {
                    if (heroes[heroName].includes(spellName)) {
                        heroes[heroName] = heroes[heroName].filter(s => s !== spellName);
                    } else {
                        console.log(`${heroName} doesn't know ${spellName}.`);
                    }
                } else {
                    console.log(`${heroName} doesn't exist.`);
                }
                break;
        }
    }

    console.log("Heroes:");

    Object.entries(heroes).sort((a, b) => b[0].localeCompare(a[0])).forEach(([hero, spells]) => {
        console.log(`== ${hero}: ${spells.join(', ')} `);
    });
}
solve(["Enroll Stefan",

"Enroll Peter",

"Enroll Stefan",

"Learn Stefan ItShouldWork",

"Learn John ItShouldNotWork",

"Unlearn George Dispel",

"Unlearn Stefan ItShouldWork",

"End"])