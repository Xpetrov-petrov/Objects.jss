function stringSubstring(array){

let keyWord = array.shift();


    for(let word of array){

        if(word.toLowerCase().includes(keyWord)){

            console.log(keyWord)
            break;
        }else{
            console.log(`${keyWord} not found!`);
        }
    }
}
stringSubstring(['python',
'JavaScript is the best programming language'])               // Text Processing Exersize\stringSubstring.js   //Not Work in judde

/*
function solve(keyWord, array){

    if(array.toLowerCase().includes(keyWord.toLowerCase())){

        console.log(keyWord);
    }else{
        console.log(`${keyWord} not found!`);
    }
}
solve('javascript', 'JavaScript is the best programming language')
*/                                                                                    /// 80/100 judge