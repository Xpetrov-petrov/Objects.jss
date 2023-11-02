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
*/

function solve(arr){
let movies = [];

for(let command of arr){

    if(command.includes('addMovie')){
        
    let movieName = command.split('addMovie ')[1];
    let movieObj = {name: movieName};
    movies.push(movieObj);

    }else if(command.includes('directedBy')){

    let [movieName, directorName] = command.split(" directedBy ");
    let movie = movies.find(movie => movie.name == movieName);
// от наличните movies намери този филм(movie) , чието име е  същото като името на филма, който аз търся (movieName);
    if(movie){
        movie.director = directorName // Добавяме свойство director , което е равно на directorName
    }
    
    }else if(command.includes('onDate')){
     let [movieName, date] = command.split(' onDate ');
     let movie = movies.find(movie => movie.name == movieName);

     if(movie){
        movie.date = date;
     }
    }
  }
  for(let movie of movies){
    if(movie.name && movie.director && movie.date){
       // console.log(JSON.stringify(movie));
    }
  };
  console.log(movies);
  
}


solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford',
    'Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );