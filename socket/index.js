import { Server } from "socket.io";

const io= new Server(9000, {
    cors: {
        origin : "http://localhost:3000"
    }
})

let users = [];

const addUser = (userData, socketId) => {
    
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}

const getUser = (userId) =>{
    
    console.log(users);
    return users.find(user => user.sub === userId);
}


io.on("connection",(socket)=>{

    socket.on("addUsers", userData=>{
        console.log(socket.id);
        addUser(userData, socket.id);
        
        io.emit("getUsers",users);
    })

    socket.on("sendMessage", (data) => {
        //workingdown
        //console.log(data);
        const user= getUser(data.reciverId);
       // console.log(user);
        io.to(user?.socketId).emit("getMessage", data);
    })
})