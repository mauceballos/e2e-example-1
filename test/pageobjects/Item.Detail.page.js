const Page = require('./page');


class ItemDetailPage extends Page {
    /**
     * define selectors using getter methods
     */
    get itemDetailPage() { return $('.details')}
    get chooseFileBtn () { return $("#inputImage") }
    get textBox () { return $('textarea') }
    btn(name){ return $(`//button[contains(text(),'${name}')]`)}

    CreateItem (test, name) {
        this.itemDetailPage.isDisplayed(30000);
        this.chooseFileBtn.isDisplayed(30000);
        this.textBox.isDisplayed(30000);
        this.textBox.setValue(test);
        browser.pause(100);
        this.btn(name).isDisplayed(30000);
        this.btn(name).click();
        browser.pause(100)
        return this; 
    }



}

module.exports = new ItemDetailPage();
