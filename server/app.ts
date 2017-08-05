import { json, urlencoded } from "body-parser";
import * as express from "express";
import * as path from "path";

// import { userRouter } from "./routes/user";

const app = express();

app.disable("x-powered-by");

app.use('/', express.static(path.join(__dirname, '../client')));
app.use(json());
app.use(urlencoded({ extended: false }));

// api routes
// app.use("/api/user", userRouter);

if (app.get("env") === "production") {
  // in production mode run application from dist folder
  app.use(express.static(path.join(__dirname, "../client")));

}

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
    code: err.status,
    message: err.message
  });
});

export { app };
