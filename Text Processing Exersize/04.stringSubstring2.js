function solve(keyWord, array) {

    array = array.toLowerCase().split(" ");

    if (array.includes(keyWord)) {
        console.log(keyWord)

    } else {
        console.log(`${keyWord} not found!`);
    }
}

solve('javascript', 'JavaScript is the best programming language')                                               // 100/100