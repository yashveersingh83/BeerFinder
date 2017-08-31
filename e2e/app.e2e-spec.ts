import { BeerFinderPage } from './app.po';

describe('beer-finder App', () => {
  let page: BeerFinderPage;

  beforeEach(() => {
    page = new BeerFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
