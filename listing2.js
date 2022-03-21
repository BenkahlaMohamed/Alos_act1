var unirest = require('unirest')



var req = unirest('GET', 'http://localhost:3000/participants').headers({
    "cache-control": "no-cache"
}).then((res) => {
    if (res.error) throw new Error(res.error)
        console.log( res.body.slice(0, 10))

        function startsWithM(participants, l) {
            return participants.filter(participant => participant.nom[0] == l)
        }

        console.log(startsWithM(res.body, "M"));

})
