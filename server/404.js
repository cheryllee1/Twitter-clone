import http from "http";

/**
 * @param {http.IncomingMessage} request
 * @param {http.IncomingMessage} response
 */
export function notfoundRouteHandler(request, response) {
  //Need to specify error type and content type, otherwise server unsure if
  //404 is valid or are we sending back actual content
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.write("wrong link la, 404 not found!");

  //Server tells browser that it's done, no more responses for this request
  response.end();
}
