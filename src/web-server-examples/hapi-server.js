import Hapi from "@hapi/hapi";
import {helloRoute} from "./hello-route";

const server = Hapi.server({
  port: 3000,
  host: "localhost",
});

server.route(helloRoute);

server.start()
    .then(() => {
        console.log("Hapi server is listening on port 3000");
    })