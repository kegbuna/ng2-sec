import { Ng2SecPage } from './app.po';

describe('ng2-sec App', function() {
  let page: Ng2SecPage;

  beforeEach(() => {
    page = new Ng2SecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
