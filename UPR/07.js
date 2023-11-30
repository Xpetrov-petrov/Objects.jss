function solve(arr){
let myObj = {};
    for(let i = 0; i < arr.length; i+=2){
        let resource = arr[i];
        let qty = arr[i+1];
myObj[resource] = qty;
        // console.log(resource, qty);
    }
    let entries = Object.entries(myObj)
   for(let [entry1, entry2] of entries){
    console.log(entry1,'->',entry2);
   }


}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ] )