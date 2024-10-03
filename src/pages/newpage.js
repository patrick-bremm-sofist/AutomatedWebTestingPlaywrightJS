const { Elements } = require('../elements/newpageElements')

class Sales {

  constructor(page) {
    this.page = page
    this.elements = Elements
  }

  async goto() {
    await this.page.goto('https://suporte.sofist.co/support/login');
  }

  async login() {
    await this.page.locator(this.elements.username).fill('teste@email.com');
    await this.page.locator(this.elements.userPass).fill('teste');
  }
};

module.exports = Sales