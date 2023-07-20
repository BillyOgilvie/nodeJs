import express from "express";
import http from "http";
import socketIo from "socket.io";

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log(`Connected to: ${socket.client.id}`);

  socket.on("someEvent", () => {
    socket.emit("someOtherEvent", { message: "hello!" });
  });

  socket.on("disconnect", () => {
    console.log(`Disconnected from: ${socket.client.id}`);
  });

  socket.on("message", (data) => {
    console.log(data);
  });


});

server.listen(8000, () => {
  console.log("Waiting for connections on port 8000");
});
