function extractFile(input){
    let firstIndex = input.split('\\').pop();
    let lastDotIndex = firstIndex.lastIndexOf('.');

    let fileName = firstIndex.slice(0, lastDotIndex);
    let fileExtension = firstIndex.slice(lastDotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx' ); 


/*function extractFile(input){
    let material = input.split('\\').pop();
    splitedMaterial = material.split('.');

    let firstIndex = splitedMaterial.shift();
    let lastIndex = splitedMaterial.pop();
    
    console.log(`File name: ${firstIndex}`);
    console.log(`File extension: ${lastIndex}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx' );            // 80/100 in judge */