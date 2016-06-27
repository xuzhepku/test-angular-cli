import { TestNg2CliPage } from './app.po';

describe('test-ng2-cli App', function() {
  let page: TestNg2CliPage;

  beforeEach(() => {
    page = new TestNg2CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
