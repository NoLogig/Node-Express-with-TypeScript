import { Router, Request, Response, NextFunction } from 'express';
import { Helden as Heroes } from '../models/data';

export class HeroRouter {

  router: Router;

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }
  /**
   * GET all Heroes.
   */
  private getAll(req: Request, res: Response, next: NextFunction) {
    res.send(Heroes);
  }
  /**
   * GET one hero by id
   */
  private getOne(req: Request, res: Response, next: NextFunction) {

    let query = parseInt(req.params.id);
    let hero = Heroes.find(hero => hero.id === query);

    if (hero) {
      res.status(200).send({
        message: 'Success',
        status: res.status,
        hero
      });
      return
    }
    res.status(404).send({
      message: 'No hero found with the given id.',
      status: res.status
    });
  }
  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  public init() {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getOne);
  }
}

// Create the HeroRouter, and export its configured Express.Router
const heroRoutes = new HeroRouter();
export default heroRoutes.router; 
