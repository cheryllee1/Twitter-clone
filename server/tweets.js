import http from "http";
import { tweets } from "./tweet.db.js";

/**
 * @param {http.IncomingMessage} request
 * @param {http.IncomingMessage} response
 */
export function tweetsRouteHandler(request, response) {
  //Telling browser to render the response as HTML
  response.setHeader("Content-Type", "text/html");

  //creating a variable to let all tweets be appended to the string
  let myHTMLString = "";

  //creating for loop to allow processing of tweets one by one
  for (let tweet of tweets) {
    //Dynamically generating a HTML list item string and appending to the HTML string
    myHTMLString = myHTMLString + `<li>${tweet}</li>`;
  }

  //Telling the server to dynamically generate a HTML page
  const HTMLPage = `<!DOCTYPE html>
<html lang="en">
<body>
<h1> Latest Tweets </h1>
    <ol>
        ${myHTMLString} 
    </ol>
</body>
</html>`;

  //Respond to the client with this dynamic HTML page
  response.write(HTMLPage);

  //Server tells browser that it's done, no more responses for this request
  response.end();
}
