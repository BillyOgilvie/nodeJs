import { io } from "socket.io-client";

const createSocketClient = (name, interval) => {
  const socket = io("http://localhost:8000");

  socket.on("connect", () => {
    console.log(`${name} connected: ${socket.id}`);

    setInterval(() => {
      // const randomNumber = Math.ceil(Math.random() * 100);
      socket.emit("message", `Hello from: ${name}`);
    }, interval);
  });

  socket.on("disconnect", () => {
    console.log(`${name} disconnected`);
  });
};

createSocketClient("Client 1", 1000);
createSocketClient("Client 2", 2000);