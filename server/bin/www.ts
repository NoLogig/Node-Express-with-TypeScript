#!/usr/bin/env node

/**
 * Module dependencies.
 */

import * as http from "http";
import { app } from "../app";
import { serverPort } from "../config";
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || serverPort);
app.set("port", port);

/**
 * Create HTTP server.*/
const server = http.createServer(app);


/**
 *  listen on provided ports */
server.listen(port);

/**
 * add error handler */
server.on("error", onError);

/**
 * start listening on port */
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val): boolean | number {

  const normalizedPort = parseInt(val, 10);

  if (isNaN(normalizedPort)) {
    // named pipe
    return val;
  }

  if (normalizedPort >= 0) {
    // port number
    return normalizedPort;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string"
    ? "Pipe " + port
    : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port;
}
