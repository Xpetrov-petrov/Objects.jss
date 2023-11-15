function hashTag(text) {
    words = text.split(' ');
    let hashWords = words.filter(word => word.startsWith('#') && word.length > 1);
    // в hashWords остават думите,които са филтрирани така,че да започват с "#" и са с length > 1 за да не хващаме само #зите 

    for (let word of hashWords) {
        word = word.slice(1);
        let isValid = true;

        for (let char of word) {
            if (!/[A-Za-z]/.test(char)) { // '//'-обявяваме regEx; []-диапазона; 
                isValid = false;
                break; // прекъсва само втория цикъл
            }
        }

        if (isValid) {
            console.log(word);
        }
    }

}
hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');