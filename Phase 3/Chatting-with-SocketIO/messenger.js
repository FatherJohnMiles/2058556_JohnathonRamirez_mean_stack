
let express = require("express")

let app = express()

let http = require("http").Server(app)

let io = require('socket.io')(http);

app.get("/",(require,response)=> {
    response.sendFile(__dirname+"\\messenger.html")
})

io.on("connection",(socket)=> {
    console.log("client connected");

    socket.on("new message",(msg)=> {
        console.log("User message:", msg);
        io.emit("new message", msg)
    
        
    })

    

})
http.listen(9090,()=>console.log("Server is running on port number 9090"))