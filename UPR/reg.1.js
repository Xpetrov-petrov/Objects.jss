function solve(input) {
    let items = [];
    let totalPrice = 0;
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;
    let command = input.shift();

    while (command != 'Purchase') {
        let match = command.match(pattern);

        if(match){
        let {name , price, qty} = match.groups;
        let pricePearOrder = Number(price) * Number(qty);
        totalPrice += pricePearOrder;
        items.push(name)
        }

        command = input.shift();
    }
    console.log(`Bought furniture:`);
    if(items.length > 0){
        console.log(items.join('\n'));
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])
//>>[A-Za-z]+<< firstmaybe   ///  node UPR/reg.1.js