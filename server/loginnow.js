import http from "http";

/**
 * @param {http.IncomingMessage} request
 * @param {http.IncomingMessage} response
 */
export function loginnowRouteHandler(request, response) {
  let body = "";
  request.on("data", (chunk) => {
    body = body + chunk.toString();
  });
  request.on("end", () => {
    console.log("Login request received!");
    response.end();
  });
}
