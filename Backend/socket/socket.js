import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
    ],
    methods: ["POST", "GET"],
  },
});
let userSocketMap = {};
export const getReceiverSocketIO = (receiverId) =>{
    return userSocketMap[receiverId]
}
io.on("connection", (socket) => {
  console.log("Socket io connected ");
  const userId = socket.handshake.query.userId;
  if (userId !== "undefined") userSocketMap[userId] = socket.id;
  socket.emit("getOnlineUsers", Object.keys(userSocketMap));
  console.log(userSocketMap);

  // disconnect user
  socket.on("disconnect", () => {
    console.log("a user disconnected ");
    delete userSocketMap[userId];
    socket.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };
