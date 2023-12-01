function solve(str) {
    let specialMaterials = { motes: 0, shards: 0, fragments: 0 };
    let junkMaterials = {};
    let specialFragment = '';

    str = str.split(' ');

    for (let i = 0; i < str.length; i += 2) {
        let qty = Number(str[i]);
        let material = str[i + 1].toLowerCase();

        if (material in specialMaterials) {
            specialMaterials[material] += qty;

            if (specialMaterials[material] >= 250) {
                if (material === 'motes') {
                    specialFragment = 'Dragonwrath';
                } else if (material === 'shards') {
                    specialFragment = 'Shadowmourne';
                } else {
                    specialFragment = 'Valanyr';
                }

                specialMaterials[material] -= 250;
                break;
            }
        } else {
            if (material in junkMaterials) {
                junkMaterials[material] += qty;
            } else {
                junkMaterials[material] = qty;
            }
        }
        console.log(`${specialFragment} obtained!`);

        Object.entries(specialMaterials)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach(([material, quantity]) => {
                console.log(`${material}: ${quantity}`);
            });

        Object.entries(junkMaterials)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(([material, quantity]) => {
                console.log(`${material}: ${quantity}`);
            });
    }
}

solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')