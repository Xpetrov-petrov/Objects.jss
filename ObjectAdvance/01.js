// асоциативен масив

let myAssocArray = {
    "John Smith ": '+359',
    'Anna Peters': '+358',
    'Ivan Petrov': '+357'
};
console.log(myAssocArray);

for(let kiy in myAssocArray){
    console.log(kiy, '->', myAssocArray[kiy]);
}