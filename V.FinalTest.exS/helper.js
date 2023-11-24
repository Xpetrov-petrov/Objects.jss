function  heroesGame(input){
    let heroesCount = input.shift();
    let heroes = {};

    for(let i = 0; i < heroesCount; i++){
        let  heroInfo = input.shift();
        let [name, hp, mp] = heroInfo.split(' ');
       /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
               console.log(heroInfo);
    }
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