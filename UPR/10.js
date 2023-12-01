function solve(str) {
    let specialMatterials = { motes: 0, shards: 0, fragments: 0 };
    let junkMaterial = {};
    let SpFrs = {};

    str = str.split(' ');
    // console.log(str);
    for (let i = 0; i < str.length; i += 2) {
        let qty = Number(str[i]);
        let material = str[i + 1].toLowerCase();

        if (material in specialMatterials) {
            specialMatterials[material] += qty
        } else {
            junkMaterial[material] = qty;
        }
        
        if(specialMatterials[material] >= 250){
        
            if(material == 'motes'){
                specilaFragment = 'Dragonwrath'
                SpFrs[specialMatterials] = 0
            }else if(material == 'shards'){
                specilaFragment = 'Shadowmourne';
                SpFrs[specialMatterials] = 0
            }else{
                specilaFragment = 'Valanyr';
                SpFrs[specialMatterials] = 0
            }
        }else{
            if(material in junkMaterial){
               junkMaterial[material] += qty;
            }else{
                junkMaterial[material] = qty;
            }
    }
    console.log(`${specilaFragment} obtained!`);
}
solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')


//motes: 'Dragonwrath', shards: 'Shadowmourne', fragments:'Valanyr' 