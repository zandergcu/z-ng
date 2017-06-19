import { ZSiteNgPage } from './app.po';

describe('z-site-ng App', () => {
  let page: ZSiteNgPage;

  beforeEach(() => {
    page = new ZSiteNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
