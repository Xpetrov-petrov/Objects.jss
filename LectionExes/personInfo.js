function personInfo (firstName, lastName, age){
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

     return person;
}
    let result = personInfo('Plamen','Petrov', 21);

    console.log(result);