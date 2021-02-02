const http = require('http');
const app = require('./DB/db');
const port = 9000;

const server = http.createServer(app);

server.listen(port);