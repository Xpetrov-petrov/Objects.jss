function employys(arr) {

    for (let employeename of arr) {
        let employee = { name: employeename, personalNum: employeename.length };
        
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`); 
    }
}
employys([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
/* employys([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);    */