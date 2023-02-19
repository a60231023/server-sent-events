### In this article, I will cover one of the important backend communication design pattern which is Server Sent Events

<br>

### Table of contents:

- [Introduction to Sever Sent Events](#introduction-to-sever-sent-events)
- [Why do we need server sent events?](#why-do-we-need-server-sent-events)

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


[def]: #introduction-to-sever-sent-events