<<<<<<< HEAD
<<<<<<< HEAD
import { InspirationStationPage } from './app.po';

describe('inspiration-station App', () => {
  let page: InspirationStationPage;

  beforeEach(() => {
    page = new InspirationStationPage();
=======
import { MeanSkelettonPage } from './app.po';

describe('mean-skeletton App', () => {
  let page: MeanSkelettonPage;

  beforeEach(() => {
    page = new MeanSkelettonPage();
>>>>>>> 2d2b6a60e45e7426806d46cecac5110121f796d6
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
=======
import { TmpPage } from './app.po';

describe('tmp App', function() {
  let page: TmpPage;

  beforeEach(() => {
    page = new TmpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
>>>>>>> 3ee57cea1c0778c3534aa3feacddba2def4d8e3f
  });
});
