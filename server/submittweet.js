import http from "http";
import { tweets } from "./tweet.db.js";

/**
 * @param {http.IncomingMessage} request
 * @param {http.IncomingMessage} response
 */
export function submittweetRouteHandler(request, response) {
  // creating a variable called body with an initial empty string
  let body = "";

  // each time there is new data coming in for that request,
  // turn the chunk of data into a string and appending it to the body variable.
  request.on("data", (chunk) => {
    body = body + chunk.toString();
  });

  // when there's no more new data coming in, run the below function
  request.on("end", () => {
    console.log("Got a post request");

    // define arguments as a constant such that the response body will be split up with ampersands as the separator
    // and creating an array of the individual strings split out from the response body string
    // we are splitting by ampersands because we are using the x-www-form-urlencoded format to send data to the server
    const args = body.split("&");

    // for every single arg of the arguments array, run the following code, so if there are 3 key value pairs, run 3 times
    for (let arg of args) {
      // to extract the key and the value from the key value pair, we split the string with an = sign,
      // and we'll get an array of two string with the key as the first element and value as the second element
      const keyValueArray = arg.split("=");

      // Now that we split it up, the first element is the KEY of the key value pair
      const key = keyValueArray[0];

      // The second element is the value
      const value = keyValueArray[1];

      //If key = tweet, process the tweet content, i.e. 'value'
      //Only want to process storing of tweet content if key is correct
      if (key === "tweet") {
        //Appending new tweets to the current list of tweets
        tweets.push(value);
      }
    }

    //When you send key value pairs to the server, there can be more than one.
    //e.g. tweets, userID. doesn't make sense to redirect the user if only one is processed
    //The server is telling the browser to temporarily redirect /submit to /tweets
    //302 is saying don't permanently store the redirection in the browser(client), only do it when instructed
    response.writeHead(302, { Location: "/tweets" });

    //Server tells browser that it's done, no more responses for this request
    response.end();
  });
}
