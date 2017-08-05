import { json, urlencoded } from "body-parser";
import * as express from "express";
import * as path from "path";

<<<<<<< HEAD
import { userRouter } from "./routes/user";
=======
// import { userRouter } from "./routes/user";
>>>>>>> 2d2b6a60e45e7426806d46cecac5110121f796d6

const app = express();

app.disable("x-powered-by");

app.use('/', express.static(path.join(__dirname, '../client')));
app.use(json());
app.use(urlencoded({ extended: false }));

// api routes
<<<<<<< HEAD
app.use("/api/user", userRouter);
=======
// app.use("/api/user", userRouter);
>>>>>>> 2d2b6a60e45e7426806d46cecac5110121f796d6

if (app.get("env") === "production") {
  // in production mode run application from dist folder
  app.use(express.static(path.join(__dirname, "../client")));

}
<<<<<<< HEAD
// if (app.get("env") === "development") {

//   app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../client/index.html'));
//   });

// }
=======
>>>>>>> 2d2b6a60e45e7426806d46cecac5110121f796d6

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next) => {
  const err = new Error("Not Found");
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {

  res.status(err.status || 500);
  res.json({
    error: {},
<<<<<<< HEAD
    message: err.message,
=======
    code: err.status,
    message: err.message
>>>>>>> 2d2b6a60e45e7426806d46cecac5110121f796d6
  });
});

export { app };
