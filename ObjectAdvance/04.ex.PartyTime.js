function partyTime(arr){
    function partyTime(input) {
        let guests = {
            'VIP': [],
            'regular': []
        };
    
        let commandIndex = input.indexOf('PARTY');
    
        let reservations = input.slice(0, commandIndex);
    
        for (let reservation of reservations) {
            let isVip = /^\d/.test(reservation);
            if (isVip) {
                guests['VIP'].push(reservation);
            } else {
                guests['regular'].push(reservation);
            }
        }
    
        let partyGuests = input.slice(commandIndex + 1);
    
        for (let guest of partyGuests) {
            let isVip = /^\d/.test(guest);
            if (isVip) {
                let index = guests['VIP'].indexOf(guest);
                if (index !== -1) {
                    guests['VIP'].splice(index, 1);
                }
            } else {
                let index = guests['regular'].indexOf(guest);
                if (index !== -1) {
                    guests['regular'].splice(index, 1);
                }
            }
        }
    
        let totalGuests = guests['VIP'].concat(guests['regular']);
        
        console.log(totalGuests.length);
        console.log(totalGuests.join('\n'));
    }
}                                                                   //check tthis after
partyTime(['Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])