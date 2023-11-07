function AMinerTask(input) {
    let resourses = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let qty = input[i + 1];

        if (resource in resourses) {   //ако текущият ключ (resource) го има като ключ в обекта (resourses) овеличаваме qty;
            resourses[resource] += qty;

        } else {  // ако до момента няма такъв ключ в resourses създай със следната стоймост;
            resourses[resource] = qty;
        }
    }
    let entries = Object.entries(resourses);
        
        for(let [resource,qty] of entries){
          console.log(`${resource} -> ${qty}`);
        }
}
AMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);