function cutAndReverse(input){
let middle = input.length / 2;

let leftSide = input.slice(0, middle).split('').reverse().join('');

let rigthSide = input.slice(middle).split('').reverse().join('');

// не му подаваме край (middle), защото то автоматично разбира // reverce- не работи върху стринг и  преобразуваме;
console.log(leftSide);
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')