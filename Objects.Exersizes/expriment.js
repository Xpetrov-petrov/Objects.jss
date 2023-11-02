/*
 //fistExam
function solve(arr){
    for(let employeeName of arr){
        let employee = { name: employeeName, personalNum: employeeName.length};
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );
solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    )    


 function towns(arr){
for(let town of arr){
    let [townName, latitude, longitude] = town.split(' | ');

    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);

    let Obj = {town: townName, latitude: latitude, longitude: longitude};
    console.log(Obj);
 
}
 }  
 towns(['Sofia | 42.696552 | 23.32601',
 'Beijing | 39.913818 | 116.363625']); 
//  towns(['Plovdiv | 136.45 | 812.575']);
   */

function store(stock, orderedProducts) {
    let products = {};

    for (let i = 0; i < stock.length; i += 2) {
        let productName = stock[i];
        let qty = Number(stock[i + 1]);

        products[productName] = qty;
        
        
    }
    // console.log(products);

    for(let j = 0; j < orderedProducts.length; j +=2){
        let productName = orderedProducts[j];
        let qty = Number(orderedProducts[j+1]);

        if(productName in products){
            products[productName] += qty;
        }else{
            products[productName] = qty;
        }
        
    }
    let entries = Object.entries(products); //kvp - kay-value-pair
    
    for(let entry of entries){
console.log(`${entry[0]} -> ${entry[1]}`);
    }
}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]
);