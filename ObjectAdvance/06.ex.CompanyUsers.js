function CompanyUsers(arr){
    let companyEmployees = {};

    for(let element of arr){
       let [company, employeeID] = element.split(' -> ');
    
    }
    console.log(companyEmployees);
}
CompanyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);

