// event - signal sent/ func call, etc
// event_Emiter - object that sends the event

const express = require('express');
const EventEmitter = require('events');
const { count } = require('console');

const app = express();
const event = new EventEmitter();

let count1 = 0
// event listener
event.on("countAPI", () => {
    count1++;
    console.log("event", count1);
})

app.get("/", (req, res) => {
    res.send("hello");
    // event emitter
    event.emit("countAPI")
})

app.get("/search", (req, res) => {
    res.send("search")
    event.emit("countAPI")
})

app.get("/about", (req, res) => {
    res.send("about")
    event.emit("countAPI")
})

app.listen(5000);
