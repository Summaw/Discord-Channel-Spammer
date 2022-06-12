
const Request = require("request")

var Payload = `Mom dad look I made it this far :D`

Request.post("https://discordapp.com/api/v6/channels/Target_Channel_ID/messages", {
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Your Discord Token here"
    },
    body: JSON.stringify({ "content": Payload })
}, function(err, res, body){
    console.log(err)
    console.log(body)
})
