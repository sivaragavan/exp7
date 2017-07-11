import { Exp7Page } from './app.po';

describe('exp7 App', () => {
  let page: Exp7Page;

  beforeEach(() => {
    page = new Exp7Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
