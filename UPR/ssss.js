function solve(arr){

for(let town of arr){
    let [townName, latitude, longitude] = town.split(' | ');

    // console.log(`town: ${townName}  latitude: ${Number(latitude).toFixed(2)}  longitude: ${Number(longitude).toFixed(2)}`);
console.log(`town: ${townName}, latitude: ${Number(latitude).toFixed(2)} longitude: ${Number(longitude).toFixed(2)}`);

}

 //{ town: 'Sofia', latitude: '42.70', longitude: '23.33'

}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)