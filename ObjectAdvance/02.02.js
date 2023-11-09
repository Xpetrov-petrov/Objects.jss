function solve(arr) {
    let words = arr.toLowerCase().split(' ');
    let obj = {};

    for (let word of words) {
       
       obj[word] = 0;
    }
    console.log(obj);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')