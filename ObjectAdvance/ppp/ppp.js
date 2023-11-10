function piccolo(arr) {
    let newArr = [];
    let object = {};

    for (let word of arr) {

        let [title, number] = word.split(', ');

        if (title == "IN") {
            object[title] = number;
            
        } else if (title == "OUT") {
            delete object[number];
        }
    }

    console.log(object);
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);