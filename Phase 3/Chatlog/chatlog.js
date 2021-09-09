let express = require("express")

let app = express()

let http = require("http").Server(app)

let io = require('socket.io')(http);

//let mongo = require("mongodb").MongoClient
let mongoose = require('mongoose')
const Msg = require('./models/messages')
let url ="mongodb://localhost:27017/tcsmean";
mongoose.pluralize(null);

mongoose.connect(url).then(res=>console.log("db connected")).
catch(err=>console.log(err))

// mongo.connect(url,(err,client)=> {

//     if(!err){
//         console.log("db connected")
//     }else {
//         console.log(err)
//     }
// })


app.get("/",(require,response)=> {
    response.sendFile(__dirname+"\\messenger.html")
})

io.on("connection",(socket)=> {
    console.log("client connected");
    socket.emit("message", "Hello user")
    socket.on("disconnect", () => {
    
        console.log('user disconnected');
    })
    
    socket.on("new message",(msg)=> {
        console.log("User message:", msg);
        const message = new Msg({msg})
        message.save().then(()=>{
            io.emit("new message", msg)

        })
      
    })
   
   
    // socket.on("new message",(msg)=> {
    //     console.log("User message:", msg);
    //     //io.emit("new message", msg)
    
        
    // })
})
http.listen(8080,()=>console.log("Server is running on port number 8080"))