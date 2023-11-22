
function splitPascalCase(input) {
    // Използвайте регулярен израз за разделяне на низа във формат PascalCase на думи
    let words = input.split(/(?=[A-Z])/);
    
    // Съединете думите със запетая и интервал
    let result = words.join(', ');
    
    // Отпечатайте резултата
    console.log(result);
}

pascal('SplitMeIfYouCanHaHaYouCantOrYouCan');


         //WHIT RegExp       //60/100 in judge

// function pascal(input){
//    let pattern =  /[A-Z][a-z]+/g;

//    let matches = input.match(pattern);
//    console.log(matches.join(', '));
// }