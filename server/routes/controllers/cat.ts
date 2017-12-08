import { Cats, ICat } from '../models/cat';
import BaseCtrl from './base';

export class CatCtrl extends BaseCtrl {
  model: ICat[] = Cats;
getAlls = this.getAll;

}

let asdf = new CatCtrl()
export default asdf;