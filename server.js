// require("dotenv").config();
const dotenv = require("dotenv");

dotenv.config({ path: "./config/custom.env" });
const dbconnect = require("./config/dbConnect.js");
const http = require("http");

const app = require("./app/app");
const PORT = process.env.PORT || 2020;
//server
const server = http.createServer(app);
server.listen(PORT, console.log(`Server is running on port ${PORT}`));
