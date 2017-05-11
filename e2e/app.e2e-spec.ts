import { DownlinePage } from './app.po';

describe('downline App', function() {
  let page: DownlinePage;

  beforeEach(() => {
    page = new DownlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
