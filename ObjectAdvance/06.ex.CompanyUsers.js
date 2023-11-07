function CompanyUsers(arr) {
    let companyEmployees = {};

    for (let companyEmployee of arr) {
        let [company, employeeID] = companyEmployee.split(' -> ');

        if (!(company in companyEmployees)) {
            companyEmployees[company] = [];
        }

        if (!companyEmployees[company].includes(employeeID)) {
            // Ако служителят не е в масива, добавете го
            companyEmployees[company].push(employeeID);
        }
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, employeeIDs] of entries) {
        console.log(name);
        employeeIDs.forEach(id => console.log(`-- ${id}`));
    }
}

CompanyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);
