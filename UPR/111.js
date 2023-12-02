function SecretChat(arr){
    let word = arr.shift();

    while(arr[0] != 'Reveal'){
       let line = arr.shift();
       let tokens = line.split(':|:');
       let command = tokens[0];
     
       switch(command){

        case'ChangeAll':
       let match = tokens[1];
       let replacement = tokens[2];
       let parts = word.split(match);
       word = parts.join(replacement);
        break;

        case'Reverse':
       let substring = tokens[1];
       let firstIndex = word.indexOf(substring);
       if(firstIndex == -1){
        console.log('error');
        continue;
       }
       let left = message.slice(0,firstIndex);
       let right = message.slice(firstIndex + substring.length);
       message = left + right + substring.split('').reverse().join('');
       break;

        case'InsertSpace':
        break;
       }
    }
}
SecretChat([

    'Hiware?uiy',

    'ChangeAll:|:i:|:o',

    'Reverse:|:?uoy',

    'Reverse:|:jd',

    'InsertSpace:|:3',

    'InsertSpace:|:7',

    'Reveal'

]);