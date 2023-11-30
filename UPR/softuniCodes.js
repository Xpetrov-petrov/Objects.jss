function solve(arr) {
    let myObj = {};
    for (let item of arr) {
        let [firm, id] = item.split(' -> ');

        if (firm in myObj) {
            if (!myObj[firm].includes(id)) {
                myObj[firm].push[id]
            }
        } 
        
        myObj[firm] = [id];

    }
    let entries = Object.entries(myObj).sort((a,b) => a[0].localeCompare(b[0]));
for(let item of entries){
    console.log(`${item[0]} -> ${item[1]}`);
}
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])