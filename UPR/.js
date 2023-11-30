function solve(arr) {
    let myObj = {};
    let secondObj = {};

    for (let item of arr) {
        let [name, address] = item.split(':');

        myObj[name] = address;

    }
    let entries = Object.entries(myObj)
    entries.sort((a,b) => a[0].localeCompare(b[0])) // (([a],[b]) => a.localeCompare(b))!!!
    
    for(let [name,adress] of entries){
        console.log(`${name} -> ${adress}`);
    }
    
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])

    //UPR/.js