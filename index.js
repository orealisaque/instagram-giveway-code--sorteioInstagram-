const instaTouch = require('instatouch');
require ('dotenv').config();
const fs = require  ('fs');


(async () => {
    try {
        const options = { count: 1,
        session: process.env.INSTAGRAM_SESSION_ID
    };
        const comments = await instaTouch.comments('yourPostIdHere', options);
        pickWinner(comments.collector)
    } catch (error) {
        console.log(error);
    }
})();

function pickWinner (participants){
    const allParticipants = participants.length;
    const pickedTicket = Math.floor(Math.random() * allParticipants);
    pickedWinner = participants[pickedTicket]
    winnerTicket(pickedWinner)
}

function winnerTicket(winner){
    fs.writeFile('infoWinner.txt', JSON.stringify(winner, null, 2), function(err){
        if(err) console.log(err);
    })
} //This Function call winner and create archive with info about the winner


