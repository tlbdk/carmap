var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("./public"));

io.on('connection', (client) => {
    client.on('event', (data) => {
        console.log(`From client: ${data}`)
        client.emit("Reply:" + data);
    });
});

server.listen(3000, () => {
    console.log("Listening on http://localhost:3000/");
});
