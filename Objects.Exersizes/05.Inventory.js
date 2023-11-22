function inventory(input){
  let heroes = [];

    for(let line of input){
     let [name, level, items] = line.split(' / ');
     let hero = {name, level: Number(level), items: items.split(', ')};
     heroes.push(hero);

    }
    heroes = heroes.sort((a, b) => a.level - b.level);
    console.log(heroes);
    
    for (let hero of heroes) {
        console.log(`Name: ${hero.name}`);
        console.log(`Level: ${hero.level}`);
        console.log(`Items: ${hero.items.join(', ')}`);
   
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'                           //Objects.Exersizes/05.Inventory.js
    ]);