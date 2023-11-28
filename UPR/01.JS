/*
function solve(arr){

for(let command of arr){
    let comLength = command.length;
   
    console.log(`Name: ${command} -- Personal Number: ${comLength}`);
}
}
solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    )

    */
    function solve(arr){
     
        for(let command of arr){
          let obj = {name: command, personalNumber: command.length}
          console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);
        }
    }

    solve([
        'Samuel Jackson',
        'Will Smith',
        'Bruce Willis',
        'Tom Holland'
        ]
        )    