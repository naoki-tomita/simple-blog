const { browser } = require("protractor");
const { cleanTestData } = require("./Delete");
const { App } = require("./PageObjects");

async function sleep(ms) {
  return new Promise(ok => setTimeout(ok, ms));
}

describe("Register", () => {
  beforeEach(async () => {
    browser.ignoreSynchronization = true;
    await cleanTestData();
  });
  it("should register articles.", async () => {
    const app = await new App;
    await app.visit();
    await app.editor().title().sendKeys("foo");
    await app.editor().body().sendKeys("bar\nbar");
    expect((await app.articles().list()).length).toBe(0);

    await app.editor().send().click();

    const articles = await app.articles().list();
    expect(articles.length).toBe(1);
    expect(await articles[0].title().text()).toBe("foo");
    expect(await articles[0].body().text()).toBe("bar\nbar");
  });
});
