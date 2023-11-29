function solve(arr) {
    // Създаваме празен обект, в който ще съхраняваме термините и техните дефиниции
    let dictionary = {};

    // Обхождаме входния масив и попълваме обекта dictionary
    for (let command of arr) {
        let parsedCommand = JSON.parse(command);
        let term = Object.keys(parsedCommand)[0];
        let definition = parsedCommand[term];

        dictionary[term] = definition;
    }

    // Извличаме термините, ги сортираме и извеждаме термините и техните дефиниции
    let sortedTerms = Object.keys(dictionary).sort();

    for (let term of sortedTerms) {
        let definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
// console.log(`Term: ${term.join('')} => Definition: ${definicion.join('')}`);
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',   
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])
 //UPR/06.MakeAdDictionary.js