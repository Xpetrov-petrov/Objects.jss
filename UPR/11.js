function solve(arr){
let myObj = {};

for(let item of arr){
   let[day, name] = item.split(' ');

   if(myObj.hasOwnProperty(day)){
    console.log(`Conflict on ${day}!`);
    continue;
   }
   myObj[day] = name;
   console.log(`Scheduled for${day}`);
}
for(let [day, name] of Object.entries(myObj)){
    console.log(day, `->`, name);
}

}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)