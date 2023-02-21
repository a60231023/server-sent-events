// import express from "express";
const express = require("express");
const app = express();

app.get("/", (req, res) => {
//   res.setHeader("Content-Type", "text/event-stream");
  res.send("hello!");
});

app.get("/stream", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:4000');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Send the SSE stream
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
    });
  send(res);
});
const port = process.env.PORT || 4000;

let i = 0;
function send(res) {
  res.write("data: " + `hello from server sent events ---- [${i++}]\n\n`);

  setTimeout(() => send(res), 1000);
}

app.listen(port);
console.log(`Listening on ${port}`);


/* Client side  Code 

let serverSendEvents = new EventSource("http://localhost:4000/stream");
serverSendEvents.onmessage = console.log("hiiiiiiiii");

*/
