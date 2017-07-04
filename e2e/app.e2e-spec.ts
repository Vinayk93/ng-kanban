import { FunnyPage } from './app.po';

describe('funny App', () => {
  let page: FunnyPage;

  beforeEach(() => {
    page = new FunnyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
