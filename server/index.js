import http from "http";

import { homeRouteHandler } from "./home.js";
import { createtweetRouteHandler } from "./createtweet.js";
import { userloginRouteHandler } from "./userlogin.js";
import { notfoundRouteHandler } from "./404.js";
import { submittweetRouteHandler } from "./submittweet.js";
import { loginnowRouteHandler } from "./loginnow.js";
import { tweetsRouteHandler } from "./tweets.js";

//http.createServer is to create a http server so that later on we can use it to listen to http requests
const server = http.createServer(
  //=> signifies that this is a function
  //this function is a request handler function
  //i.e. tells you what to respond with if the req is successful and also based on what the req is
  (request, response) => {
    console.log("swee la request received");

    //If the request URL's path is /, respond with home page.
    if (request.url === "/") {
      homeRouteHandler(request, response);
    }

    //If the request URl's path is /tweets and request method is GET, respond with array of all tweets
    else if (request.url === "/tweets" && request.method === "GET") {
      tweetsRouteHandler(request, response);
    }

    //Creating a static file hosting page and loading the create tweet page
    else if (request.url === "/create" && request.method === "GET") {
      createtweetRouteHandler(request, response);
    }

    //need space here lol
    else if (request.url === "/login" && request.method === "GET") {
      userloginRouteHandler(request, response);
    }

    //There can be two same paths '/login' because the request methods differ, GET vs POST
    else if (request.url === "/login" && request.method === "POST") {
      loginnowRouteHandler(request, response);
    }

    // If the request URL's path is /submit and request method is POST, respond with
    else if (request.url === "/submit" && request.method === "POST") {
      submittweetRouteHandler(request, response);
    }

    //If the request URL's path is none of the above, respond with "wrong link la, 404 not found!"
    else {
      notfoundRouteHandler(request, response);
    }
  }
);

//make this server listen to port 3000
//because the smaller numbers are choped by the computer for other purposes, such as port 465 or 25 for smtp
//can only have 1 listener per port, if someone is listening on port 25, you have to kick that person out
server.listen(3000);

//so that we know that the server is running
console.log("server is running");
