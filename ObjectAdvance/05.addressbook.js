//ex3
function solve(input) {
    let adressBook = {};

    for (let item of input) {
        let [name, adress] = item.split(':');

        adressBook[name] = adress;
    }

    let entries = Object.entries(adressBook);
    entries.sort(([a], [b]) => a.localeCompare(b));

    let sorted = {};///

    for (let [name, address] of entries) {
        sorted[name] = address;//// dobavqme svoistva na 'sorted' po tozi nachin

    }
    for (let [name, address] of Object.entries(sorted)) {
        console.log(name, '->', address);
    }
}
solve(['Bob:Huxley Rd',
    'John:Milwaukee',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta',
    'Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])

// solve(['Tim:Doe Crossing',
// 'Bill:Nelson Place',
// 'Peter:Carlyle Ave',
// 'Bill:Ornery Rd']
// )