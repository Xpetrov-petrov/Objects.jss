function starEnigma(arr) {
    let msgsCount = Number(arr.shift());
    let descryptedMsgs = [];


    let startPattern = /[star]/gi;

    for (let i = 0; i < msgsCount; i++) {
        let msg = arr.shift();
        let decriptedMsg = '';
                                                                                         
        let matches = msg.match(startPattern)

        if (matches) {
            let count = matches.length;
            for (let char of msg) {
                let code = char.charCodeAt();
                code -= count;

                let newChar = String.fromCharCode(code);

                descryptedMsgs = msg;
            }
        } else {
            decriptedMsg = msg;
        }
      decriptedMsg.push(decriptedMsg)
    }
    let planetPatern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/gi
    
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for(let msg of descryptedMsgs){
        let match = msg.match(planetPatern);

        if(match){
            let {name, type } = match.groups;
            if(type == 'A'){
                attackedPlanets.push(name);
            }else{
                destroyedPlanets.push(name);
            }
        }
    }
    attackedPlanets.sort((a, b) => a.localCompare(b));
    destroyedPlanets.sort((a, b) => a.localCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(planet => console.log(`-> ${planet}`));
}
starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);


// starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR' ])
 