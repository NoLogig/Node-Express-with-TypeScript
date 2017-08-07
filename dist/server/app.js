"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express = require("express");
const path = require("path");
// import * as mongodb from "mongodb";
const user_1 = require("./routes/user");
const app = express();
exports.app = app;
app.disable("x-powered-by");
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: false }));
// // Create a database variable outside of the database connection callback to reuse the connection pool in your app.
// var db
// // Connect to the database before starting the application server.
// mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
//   if (err) {
//     console.log(err);
//     return 
//     // process.exit(1);
//   }
//   // Save database object from the callback for reuse.
//   db = database;
//   console.log("Database connection ready");
//   // Initialize the app.
//   // var server = app.listen(process.env.PORT || 3000, function () {
//   //   var port = server.address().port;
//   //   console.log("App now running on port", port);
//   // });
// });
// api routes
app.use("/api/user", user_1.userRouter);
if (app.get("env") === "production") {
    // in production mode run application from dist folder
    app.use(express.static(path.join(__dirname, "/../client/")));
}
// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    next(err);
});
// production error handler
// no stacktrace leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message,
    });
});
//# sourceMappingURL=D:/Angular/Inspiration-Station Prod/mean-inspiration/dist/server/app.js.map