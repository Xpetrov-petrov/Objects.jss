function checkLotteryTickets(input) {
    let tickets = input.split(',').map(ticket => ticket.trim());

    for (let ticket of tickets) {
        if (ticket.length !== 20) {
            console.log("invalid ticket");
            continue;
        }

        let leftHalf = ticket.substring(0, 10);
        let rightHalf = ticket.substring(10);

        let leftMatch = leftHalf.match(/[@#$^]{6,10}/);
        let rightMatch = rightHalf.match(/[@#$^]{6,10}/);

        if (leftMatch && rightMatch && leftMatch[0][0] === rightMatch[0][0]) {
            let matchLength = Math.min(leftMatch[0].length, rightMatch[0].length);
            let matchSymbol = leftMatch[0][0];
            if (matchLength === 10) {
                console.log(`ticket "${ticket}" - ${matchLength}${matchSymbol} Jackpot!`);
            } else {
                console.log(`ticket "${ticket}" - ${matchLength}${matchSymbol}`);
            }
        } else {
            console.log(`ticket "${ticket}" - no match`);
        }
    }
}

// Example usage:
checkLotteryTickets("Cash$$$$$$Ca$$$$$$sh, validTicket, Cash$$$$$$Ca$$$$$$sh, $$$$$$$$$$$$$$$$$$$$");