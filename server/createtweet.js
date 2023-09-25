import fs from "fs";
import http from "http";

/**
 * @param {http.IncomingMessage} request
 * @param {http.IncomingMessage} response
 */
export function createtweetRouteHandler(request, response) {
  const myHTMLFile = fs.readFileSync("./static/createtweet.html");
  response.setHeader("Content-Type", "text/html");
  response.write(myHTMLFile);
  response.end();
}
