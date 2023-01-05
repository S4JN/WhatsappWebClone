import { Server } from "socket.io";

const io= new Server(process.env.PORT, {
    cors: {
        origin : "https://astonishing-kashata-9fb5a2.netlify.app"
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
