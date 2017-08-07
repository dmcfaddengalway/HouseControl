import { HouseControlPage } from './app.po';

describe('house-control App', () => {
  let page: HouseControlPage;

  beforeEach(() => {
    page = new HouseControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
