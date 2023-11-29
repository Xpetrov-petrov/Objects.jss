let myAsArr = {
    'john Smith': '11111111111111',
    'Peter Petrov': 33333333333333,
        'Ivan ivanov':888888888888
}
console.log(myAsArr);

for(let i in myAsArr){
    console.log(`${i} -> ${myAsArr[i]}`);
}
let entries = Object.entries(myAsArr)


for(let j of entries){
    console.log(j);
}