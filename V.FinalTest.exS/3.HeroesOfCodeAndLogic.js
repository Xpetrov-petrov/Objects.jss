function heroesGame(input) {     //- a hero can have a maximum of 100 HP and 200 MP
    
    let party = {};                            // !!!!
    let n = input.shift();

    for (let i = 0; i < n; i++) {
        let heroData = (input.shift());
       
        let [name, health, mana] = heroData.split(' ');

        let hero = { //suzdavame obekt
            hp: Number(health), //!!!!
            mp: Number(mana)    //!!!!

        }
        party[name] = hero; // добавяме ключ name към обекта със следните стойности; //!!!!
    }
     while(input[0] != 'End'){
        let line = input.shift();
        let tokens = line.split(' - ');
        let command = tokens[0];
        let name = tokens[1];

        switch(command){
            case'Heal':
               break;
            case'Recharge':
               break;
            case'CastSpell':
               break;
            case'TakeDamage':
               break;
        }
     }



   console.log(party);
}
heroesGame([
    '2',                                                           //V.FinalTest.exS\3.HeroesOfCodeAndLogic.js
    'Solmyr 85 120',
    'Kyrre 99 50',                                                 //V.FinalTest.exS/3.HeroesOfCodeAndLogic.js
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])
