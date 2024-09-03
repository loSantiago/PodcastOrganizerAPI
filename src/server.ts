import * as http from "node:http";
import { app } from "./app";


const server = http.createServer(app);

//Server address.
const port: any = process.env.PORT;

server.listen(port, () => {
    console.log("Server Running in port: " + port)
});