console.log('Client side')

let socket = io();

socket.on('connect', () => {
    console.log("Connected to server");
    socket.emit("data", "Hello");
});

socket.on('data', (data) => {
    console.log(`Reply from server:`, data);
});

var main = document.getElementById("main");
main.addEventListener("click", function(event) {
    var car = document.getElementById("car");
    car.style.top = event.clientY + "px";
    car.style.left = event.clientX + "px";
    console.log(`x:${event.clientX}, y:${event.clientY}`);
});
