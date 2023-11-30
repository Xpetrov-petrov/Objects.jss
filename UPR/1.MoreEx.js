function solve(arr){
   let obj = {};
for(let item of arr){
    let [name , phone] = item.split(' ');
   obj[name] = phone;

}
let ogi = Object.entries(obj);
for(let gi of ogi){
    
    console.log(`${gi[0]} -> ${gi[1]}`);
}
}
solve([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
  ])