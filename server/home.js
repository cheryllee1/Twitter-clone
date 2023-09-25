import fs from "fs";
import http from "http";

/**
 * @param {http.IncomingMessage} request
 * @param {http.IncomingMessage} response
 */
export function homeRouteHandler(request, response) {
  //Content that is read from home.html should be saved in myHTMLFile
  const myHTMLFile = fs.readFileSync("./static/home.html");

  //To indicate the MIME type to explicitly tell the browser to render it as HTML.
  response.setHeader("Content-Type", "text/html");

  //Respond based on what is in myHTMLFile
  response.write(myHTMLFile);

  //Server tells browser that it's done, no more responses for this request
  response.end();
}
