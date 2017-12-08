import { Request, Response, Router, NextFunction } from "express";
import { join } from "path";

const homeRouter: Router = Router();

homeRouter.get("/", (request: Request, response: Response, next: NextFunction) => {
  response.sendFile(join(__dirname, '/../../client/index.html'));
});

export default homeRouter;
