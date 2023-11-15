/*
function extractFile(input){
    let firstIndex = input.split('\\').pop();
    let lastDotIndex = firstIndex.lastIndexOf('.');   // всичко преди последната точка е имато на файла , затова решение 2 не работи
                // последният индекс да бъде точка
    let fileName = firstIndex.slice(0, lastDotIndex);
    let fileExtension = firstIndex.slice(lastDotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx' ); 
*/


function extractFile(input){
    let material = input.split('\\').pop();
    splitedMaterial = material.split('.');

    let lastIndex = splitedMaterial.pop();
    let firstIndex = splitedMaterial.join('.');  // (join) Това е необходимо, защото когато разделяш с split('.'), ти премахваш точката между името на файла и разширението. Така чрез .join('.') ти връщаш точката и съединяваш отново името на файла с разширението.
    
    console.log(`File name: ${firstIndex}`);
    console.log(`File extension: ${lastIndex}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx' );            // 100/100 in judge */