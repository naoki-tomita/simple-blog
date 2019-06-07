const { $, $$, browser } = require("protractor");

class TitleInput {
  async sendKeys(text) {
    await $("input").sendKeys(text);
  }

  async value() {
    return await $("input").getAttribute("value")
  }
}

class BodyInput {
  async sendKeys(text) {
    await $("textarea").sendKeys(text);
  }

  async value() {
    return await $("textarea").getAttribute("value");
  }
}

class SendButton {
  async click() {
    await $("button").click();
  }
}

class Editor {
  title() {
    return new TitleInput();
  }
  body() {
    return new BodyInput();
  }
  send() {
    return new SendButton();
  }
}

class Articles {
  async list() {
    const articles = [];
    await $$(".article").each(el => articles.push(new Article(el)));
    return articles;
  }
}

class Title {
  constructor(element) {
    this.element = element;
  }

  async text() {
    return await this.element.$("h1").getText();
  }
}

class Body {
  constructor(element) {
    this.element = element;
  }

  async text() {
    return await this.element.$("p").getText();
  }
}

class Article {
  constructor(element) {
    this.element = element;
  }

  title() {
    return new Title(this.element);
  }

  body() {
    return new Body(this.element);
  }
}

class App {
  async visit() {
    await browser.get("http://localhost:3000");
  }

  editor() {
    return new Editor();
  }

  articles() {
    return new Articles();
  }
}

exports.App = App;
