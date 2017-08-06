
import { InspirationStationPage } from './app.po';

describe('inspiration-station App', () => {
  let page: InspirationStationPage;

  beforeEach(() => {
    page = new InspirationStationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
