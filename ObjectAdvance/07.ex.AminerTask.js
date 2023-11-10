function AMinerTask(arr) {
    let resourses = {};

    for(let i = 0; i < arr.length; i += 2){
        let resource = arr[i];
        let qty = Number(arr[i+1]);
        
        if(resource in resourses){
              resourses[resource] += qty;
        }else{
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
    '17']);