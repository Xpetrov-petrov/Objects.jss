function partyTime(input) {
    let list = new Set();

    while(input[0] != 'PARTY'){
        list.add(input.shift());

    }
    input.shift();  

  for(let name of input){
    list.delete(name)
  }

  let vips = [];
  let regulars = [];

for(let name of list){
    if(name.charCodeAt(0) >= 48 && name.charCodeAt(0) <= 57){
        vips.push(name);

    }else{
        regulars.push(name)
    }

}
console.log(list.size);

if(vips.length > 0){
 console.log(vips.join('\n'));
}

if(regulars.length > 0){
console.log(regulars.join('\n'));
}
}
partyTime(['Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])