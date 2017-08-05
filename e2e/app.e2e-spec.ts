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
  });
});
