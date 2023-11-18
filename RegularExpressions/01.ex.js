function furniture(input) {
let items = [];
let totalPrice = 0;

let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/g;

    let command = input.shift();


    while (command != 'Purchase') {
        let match = command.match(pattern);

        if(match){
            let {name, price, qty} = match.groups;
          
            let furniturePrice = Number(price) * Number(qty);
            items.push(name);
            totalPrice += furniturePrice;
        }

       command = input.shift();
        // console.log('Bought furniture:');
        // console.log(`${name}`);
        // console.log(`Total money spend: ${totalPrice}`);
    }


}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
);