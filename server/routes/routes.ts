import { Router }from 'express';

import CatCtrl from './controllers/cat';
import { Cats } from './models/cat';
import HeroRouter from './controllers/hero';

export function setRoutes(app) {

  const router = Router();

  const catCtrl = CatCtrl;

  // Cats
  router.route('/cats').get(catCtrl.getAlls);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // Heros
  router.route('/heros').get(HeroRouter);

  // Apply the routes to our application with the prefix /api
  app.use('/apis', router);

}
