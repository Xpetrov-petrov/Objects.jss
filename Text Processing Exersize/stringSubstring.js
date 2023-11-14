function stringSubstring(array){

let keyWord = array.shift()


    for(let word of array){

        if(word.toLowerCase().includes(keyWord)){

            console.log(keyWord)
            break;
        }else{
            console.log(`${keyWord} is not found`)
        }
    }
}
stringSubstring(['python',
'JavaScript is the best programming language'])               // Text Processing Exersize\stringSubstring.js