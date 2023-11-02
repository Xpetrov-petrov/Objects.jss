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
    )    */

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