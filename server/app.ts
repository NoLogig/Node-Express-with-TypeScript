import * as express from "express";
import { join, dirname } from "path";
import { json, urlencoded } from "body-parser";

import * as cors from "cors";
// todo: check for ES6 export
// this module doesn't use the ES6 default export yet
// import * as cookieParser = require('cookie-parser'); 
// import * as cookieParser from 'cookie-parser'; 


import * as logger from 'morgan';
import * as errorHandler from "errorhandler";

import userRouter from "./routes/user";
import homeRouter from "./routes/home";
import { simpleCrudRouter } from "./routes/simple-crud-router";

import { Db } from "mongodb";
import { database, dbCtrl } from "./mongoDB/index";

// Creates and configures an ExpressJS web server.
export class Server {

  // Reference to Express instance
  public app: express.Application;
  // Database for later reuse
  public db: Db;

  // Configure MongoDataBase
  private dbConfObj = {
    host: "ds129143.mlab.com",
    dbuser: "NoLogig",
    dbpassword: "Scheis0egal!",
    port: 29143,
    dbname: "nologig-db"
  };
  // Configure CORS
  private corsOptions: cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "http://localhost:4200",
    preflightContinue: false
  };

  // Run configuration methods on the Express instance
  constructor() {
    this.app = express();
    this.database();
    this.middleware();
    this.routes();
  }

  /*  
    readAll(collectionName: string, cb: (dbResponse) => void): void {
  
      this.db.collection(collectionName, (err, collection) => {
  
        if (err) return cb({ error: err });
  
        collection.find({}, (innerError, cursor) => {
  
          if (innerError) return cb({ error: innerError });
  
          if (cursor) return cursor.toArray().then(ary => {
            return cb({
              error: null,
              data: this.morphDataOnRetrieval(ary)
            });
          });
  
          return cb({ error: { message: 'not found this shit' } });
        });
      });
    }
    morphDataOnRetrieval(data, logme?: boolean) {
  
      if (!data) return console.error('No data!');
  
      const dataCopy = JSON.parse(JSON.stringify(data));
  
      const morphResource = (resource): void => {
  
        if (typeof resource._id !== 'string') {
          return resource.uid = resource._id.toHexString();
        }
        resource.uid = resource._id;
        delete resource._id;
      };
  
      if (Array.isArray(dataCopy)) {
        dataCopy.forEach(resource => {
          morphResource(resource);
        });
        return dataCopy;
      }
  
      morphResource(dataCopy);
      return dataCopy;
    }
  */
  // Configure DataBase
  private database() {

    // connect to Database an store for later reuse
    database.connectToDatabase(this.dbConfObj, (db) => {

      this.db = db;
      // this.readAll("myCollection", (data) => {
      //   console.log(data);
      // });
    });
  }

  // Configure Express middleware
  private middleware() {

    this.app.use(logger('dev'));
    // json form parser
    this.app.use(json());
    // query string parser
    this.app.use(urlencoded({ extended: false }));
    // static paths
    this.app.use(express.static(join(__dirname, "/../client")));
    // set CORS // or this.corsOptions 
    this.app.use(cors({ credentials: true, origin: true })); 
    // enable CORS pre-flight
    // this.app.options("*", cors(this.corsOptions));
  }

  // Configure API endpoints
  private routes() {

    this.app.use('/home', homeRouter);
    this.app.use('/user', userRouter);

    // The simpleCrudRouter one should stay last, since it covers quite a broad range of requests  "/user/:" and if it's moved above
    // it will steal away the endpoints of the more specific implementations
    this.app.use('/api/v1/', simpleCrudRouter);

    // catch 404 and forward to error handler
    this.app.use((req, res, next) => {
      let err = new Error('Not Found');
      err['status'] = 404;
      next(err);
    });
    //  error handlers
    this.app.use(errorHandler());

  }
}

let server = new Server();
export default server;
