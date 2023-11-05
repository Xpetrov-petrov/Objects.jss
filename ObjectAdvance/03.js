function solve(input){
let calendar = {};
for(let item of input){
    let [day,name] = item.split(' ');
    calendar[day] = name;

}
console.log(calendar);
}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])