function heroesGame(arr) {     //- a hero can have a maximum of 100 HP and 200 MP
    let obj = {heroname,hp,mana};
    let heroesCount = arr.shift();
    for (let i = 0; i < heroesCount; i++) {
        let hero = (arr[i]);
        obj.push(hero);
    }
    for (let item of obj) {
        item = item.split(' ')
        // let [name, health, mana] = item;
    }

    let command = arr.shift();
    console.log(obj); 

}
heroesGame([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',                                                 //V.FinalTest.exS/3.HeroesOfCodeAndLogic.js
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])
