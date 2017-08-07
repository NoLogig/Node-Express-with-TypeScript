#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("../app");
const config_1 = require("../config");
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || config_1.serverPort);
app_1.app.set("port", port);
/**
 * Create HTTP server.*/
const server = http.createServer(app_1.app);
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
function normalizePort(val) {
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
//# sourceMappingURL=D:/Angular/Inspiration-Station Prod/mean-inspiration/dist/server/bin/www.js.map