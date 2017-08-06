import { json, urlencoded } from "body-parser";
<<<<<<< HEAD
import * as express from "express";
import * as path from "path";

// import { userRouter } from "./routes/user";

const app = express();

app.disable("x-powered-by");

app.use('/', express.static(path.join(__dirname, '../client/')));
app.use(json());
app.use(urlencoded({ extended: false }));

// api routes
// app.use("/api/user", userRouter);

if (app.get("env") === "production") {
  // in production mode run application from dist folder
  app.use(express.static(path.join(__dirname, "/../client/")));

}
// if (app.get("env") === "development") {

//   app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../client/index.html'));
//   });

// }
=======
import * as compression from "compression";
import * as express from "express";
import * as path from "path";

import { feedRouter } from "./routes/feed";
import { loginRouter } from "./routes/login";
import { protectedRouter } from "./routes/protected";
import { publicRouter } from "./routes/public";
import { userRouter } from "./routes/user";

const app: express.Application = express();

app.disable("x-powered-by");

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

// api routes
app.use("/api/secure", protectedRouter);
app.use("/api/login", loginRouter);
app.use("/api/public", publicRouter);
app.use("/api/feed", feedRouter);
app.use("/api/user", userRouter);

if (app.get("env") === "production") {

  // in production mode run application from dist folder
  app.use(express.static(path.join(__dirname, "/../client")));
}
>>>>>>> 3ee57cea1c0778c3534aa3feacddba2def4d8e3f

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
    code: err.status,
    message: err.message
=======
    message: err.message,
>>>>>>> 3ee57cea1c0778c3534aa3feacddba2def4d8e3f
  });
});

export { app };
