import app from "./app.js";
import http from 'http';
import { Server } from "socket.io";

const PORT = process.env.PORT || 4000

const server = http.createServer(app);
const htttpServer = server.listen(PORT);
const io = new Server(htttpServer, {
    cors:{
        origin:'*'
    }
});

io.on('connection',(socket)=>{
    console.log('conectado a web socket')
    socket.on('message:client',(message)=>{
        const newMessage = {
            id: socket.id,
            body: message
        }

        socket.broadcast.emit('message:server',newMessage)
    })

})