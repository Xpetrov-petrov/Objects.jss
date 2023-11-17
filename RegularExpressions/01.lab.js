function solve(input){

    let patern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = input.match(patern);

console.log(result.join(' '));
}
solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov')