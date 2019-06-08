const { $, $$, browser } = require("protractor");

class TitleInput {
  get element() {
    return $(".dialog-content input");
  }

  async sendKeys(text) {
    await this.element.sendKeys(text);
  }

  async value() {
    return await this.element.getAttribute("value")
  }
}

class BodyInput {
  get element() {
    return $(".dialog-content textarea");
  }

  async sendKeys(text) {
    await this.element.sendKeys(text);
  }

  async value() {
    return await this.element.getAttribute("value");
  }
}

class SendButton {
  get element() {
    return $$(".dialog-content button").get(0);
  }

  async click() {
    await this.element.click();
  }
}

class Header {
  openEditorButton() {
    return $(".header button");
  }
}

class Editor {
  async open() {
    await new Header().openEditorButton().click();
  }

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
    return await this.element.$("h2").getText();
  }
}

class Body {
  constructor(element) {
    this.element = element;
  }

  async text() {
    return await this.element.$("div.body").getText();
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
