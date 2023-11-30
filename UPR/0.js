function solve(input){
    let adressBook = {};
    
    for(let item of input){
        let [name, adress] = item.split(':');
    
        adressBook[name] = adress;
     }
    
     let entries = Object.entries(adressBook);
     entries. sort(([a],[b]) => a.localeCompare(b));
    
     let sorted = {};///
    
     for(let [name,address] of entries){
        sorted[name] = address;//// dobavqme svoistva na 'sorted' po tozi nachin
    
     }
     for(let [name, address] of Object.entries(sorted)){
        console.log(name,'->', address);
     }
    }
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])

    //UPR/.js