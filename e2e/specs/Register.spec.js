const { browser } = require("protractor");
const { cleanTestData } = require("./Delete");
const { App } = require("./PageObjects");

async function sleep(ms) {
  return new Promise(ok => setTimeout(ok, ms));
}

describe("Register", () => {
  const app = new App;
  beforeEach(async () => {
    sleep(500);
    browser.ignoreSynchronization = true;
    await cleanTestData();
    await app.visit();
  });

  async function registerArticle(title, body) {
    await app.editor().title().sendKeys(title);
    await app.editor().body().sendKeys(body);
    await app.editor().send().click();
  }

  it("should register articles.", async () => {
    expect((await app.articles().list()).length).toBe(0);

    await registerArticle("title1", "body2");

    const articles = await app.articles().list();
    expect(articles.length).toBe(1);
    expect(await articles[0].title().text()).toBe("title1");
    expect(await articles[0].body().text()).toBe("body2");
  });

  it("should show multi articles. newer articles are displayed above.", async () => {
    await registerArticle("title1", "body1");
    await registerArticle("title2", "body2");

    const articles = await app.articles().list();
    expect(articles.length).toBe(2);
    expect(await articles[0].title().text()).toBe("title2");
    expect(await articles[0].body().text()).toBe("body2");
    expect(await articles[1].title().text()).toBe("title1");
    expect(await articles[1].body().text()).toBe("body1");
  });
});
