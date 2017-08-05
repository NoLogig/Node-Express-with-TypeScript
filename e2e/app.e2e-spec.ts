import { MeanSkelettonPage } from './app.po';

describe('mean-skeletton App', () => {
  let page: MeanSkelettonPage;

  beforeEach(() => {
    page = new MeanSkelettonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
