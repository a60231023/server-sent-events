### In this article, I will cover one of the important backend communication design pattern which is Server Sent Events

<br>

### Table of contents:

- [Introduction to Sever Sent Events](#introduction-to-sever-sent-events)
- [Why do we need server sent events?](#why-do-we-need-server-sent-events)
- [Implementation](#implementation)
- [Explanation](#explanation)
- [Conclusion](#conclusion)

# Introduction to Sever Sent Events

> Lets first see what happens when you enter the domain name of website or serch something on the web

    - The DNS server resolves the domain name into the corresponding IP( Internet Protocol) address

    - Now when the browser has the IP address, it goes to that webserver and requests the data present on that website.

    - The web server responds to your requests by sending you the HTML, CSS and JavaScript page which your browser renders.
  
    - Finally you see the web page.

> So this is how the web works, you request for some data(different form) and the web server sends you the response

<br>

> This communication can be done by implementing different design pattern.These are mainly divided into two categories:-

<br>

  1. Client Pull techniques :- This involves the client requesting the data using XHR (XMLHttpRequest) and fetch. The server will not respond until it is being asked to do.
   
        > This techniques is used in Short polling (The client keeps requesting the data and the server keeps responding) and long polling (the client requests the data and the server responds only it has the data available).
  
  <br>

  2. Server Push techniques :- Server push technolgy involves the server sending updates to the client without the client having to request them. There are multpile technique based on this method.

       > WebSockets :- It is a protocol in which server can push updates to the client in real-time without the client having to request them. This protocol can be used in various application like chat application, stock market to get real time data etc.
       
       <br>

       > Server-Sent Events (SSE) :- This is a technology that allows the server to push updates  to the client over the single HTTP connection. This technology is built on top of HTTP protcol and uses a single text-based format. It is simple to use.  
    
<br>

  *Although both WebSockets and SSE is used to real-time communication, there are some major differences like WebSockets uses bi-directional communication, server load is high for it, and uses binary format for messages, feel free to dive into it.*

<br>

# Why do we need server sent events?

> As discussed in the previous section, SSE can be used for real-time communication, allowing the server to send updates without the need of client to constantly send request to the server.

<br>

> There are many reasons to use server sent events. Some of them are as follows :-

       1. Real time communication 
       2. Low latency
       3. Scalability
       4. simple and easy to implement
       5. Build on top of HTTP 

> There are also some disadvantages as well like the client must be online, and it may not able be handle the data. As it uses HTTP/1.1  it can only make 6 connection at a time.

<br>

# Implementation

<br>

> To run a demo application -- fire up your code editor and run node index.js

```JavaScript

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
```

# Explanation

> This is simple code which in JavaScript which uses express package to create server and send SSE events to clients.

<br>


- When the client requests **/stream** route, the server sends continuos SSE stream of messages to the client.
- I have used **res.setHeader** to set the header to avoid cors policy blocking.
- Next I have set up the content type header with **res.writeHead** which sets up the response header.
- Then I have called the **send** function and it is being called every 1 second with the response object.
- The function send takes the response object and writes a message to SSE stream every second.
- **app.listen()** method will start the server on the specified port (4000).

<br>

> - Next we have the client side code which is just creating object for EventSource and connect to server.
> - we have set up **onmessage** event listener which console logs on every time it receive a message from the server.

```JavaScript
let serverSendEvents = new EventSource("http://localhost:4000/stream");
serverSendEvents.onmessage = console.log;
```

![Screenshot--1328-](/content/images/2023/02/Screenshot--1328-.png)

![Screenshot--1329-](/content/images/2023/02/Screenshot--1329-.png)

![Screenshot--1330-](/content/images/2023/02/Screenshot--1330-.png)

# Conclusion

> Server-Sent Events is a useful technology for web applications that is useful in providing the clients with  real-time updates or notifications. It allows the server to push updates to the client without the need for constant polling, which improves performance, reduces latency, and increases scalability.






[def]: #introduction-to-sever-sent-events