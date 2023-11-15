function replaceRepeatingChars(str){
  let noRepeatStr = '';
  let prevChar = '';

  for(let cur of str){

    if(cur !== prevChar){
        
        noRepeatStr += cur;
        prevChar = cur;
    }

  }
  console.log(noRepeatStr);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')