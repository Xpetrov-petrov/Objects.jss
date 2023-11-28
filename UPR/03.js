function solve(arr1, arr2) {
    let products = {};
    let orderedProducts = {};

    for (let i = 0; i < arr1.length; i += 2) {

        let productName = arr1[i];
        let qty = arr1[i+1]
      
        products[productName] = Number(qty)
  
    }

    for (let i = 0; i < arr2.length; i += 2) {

        let productName = arr2[i];
        let qty = arr2[i+1]
      
        orderedProducts[productName] = Number(qty)

        if(productName in products){
            products[productName] += Number(qty);
        }else{
            products[productName] = Number(qty);
        }
   
    }

    let entries = Object.entries(products)

    for(let entry of entries){
        console.log(entry.join(' -> '));
    }           // entru[0] -> entry[1]
    
    
  
}                                                                                                  //UPR/03.JS
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ])