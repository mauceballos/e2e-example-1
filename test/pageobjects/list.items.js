let title = 'List of items';

const Page = require('./page');


class ListItemsPage extends Page {

    get title() { return $('h1') }
    get ListItemsPage() { return $('.media-list .media') }
    get textBox() { return $('textarea') } s
    btn(name) { return $(`//button[contains(text(),'${name}')]`) }

    getModal() {
        this.ListItemsPage.isDisplayed(30000);
        this.title.isExisting(15000);
        this.title.isDisplayed(15000);
        expect(this.title).toHaveTextContaining(title);
        console.log(this.title.getText());
        return this;
    }

    checkBtn(test, name) {
        this.getModal();
        this.btn('Edit').isDisplayed(30000);
        this.btn('Delete').isDisplayed(30000);
        browser.pause(100)
        return this;
    }

    updateOrDeleteItem(test, name) {
        this.getModal();
        this.textBox.isDisplayed(30000);
        this.textBox.setValue(test);
        browser.pause(100);
        this.btn(name).isDisplayed(30000);
        this.btn(name).click();
        browser.pause(100)
        return this;
    }



}

module.exports = new ListItemsPage();