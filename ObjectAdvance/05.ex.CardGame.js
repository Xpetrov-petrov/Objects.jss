function cardGame(arr) {
    let playersCards = {};
    let array = [];
    let powerValues = {2: 2, 3 :3, 4 :4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14};
    let typesValues = { S: 4, H: 3 ,D: 2, C: 1 };

    for (let playerDeck of arr) {
        let [playerName, cardsAsString] = playerDeck.split(': ');
        let cards = cardsAsString.split(', ');

        if(playerName in playersCards){ // проверяваме дали името го има в обекта
            playersCards[playerName].push(...cards);// разбива масива на отделни елементи , защото ако използваме само push ще стане масив във масива; 
        }else{
            playersCards[playerName] = cards;
// във обекта(playersCards) създаваме ключ(playerName) и му добавяме стойност(cards), която е масив;
        } 
    }
    let entries = Object.entries(playersCards);
 
    for(let[name,deck] of entries){
        let uniqueDeck = new Set(deck);
        let deckValue = 0;

        for(let card of uniqueDeck){
        let power = card.slice(0, card.length -1);
        let type = card[card.length -1]
        
        let cardValue = powerValues[power] * typesValues[type];
        deckValue += cardValue;
        }
        console.log(`${name}: ${deckValue}`);
    }
    
}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC', 
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
])