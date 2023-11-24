function  heroesGame(arr){
    let heroesCount = arr.shift();
    let heroes = [];

    for(let i = 0; i < heroesCount; i++){
        heroInfo = arr[i].split(' '); // Присвояване на стойност на разгънатия масив
        let [name, hp, mp] = heroInfo;
        heroes.push(hero);
    }
console.log(hero);
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