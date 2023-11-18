function solve([input]) {
    let patern = /(?<day>\d{2})(?<sep>[-./])(?<month>[A-Z][a-z]{2})\k<sep>(?<year>\d{4})/g;
               ///              //!!!!!                                   !!!! 
    let match = patern.exec(input);           // ВИНАГИИ!!!
    while (match != null) {
        let { day, month: month, year } = match.groups;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        match = patern.exec(input);        // ВИНАГИИ!!!
    }

}
solve([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
])