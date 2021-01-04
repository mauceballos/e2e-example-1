const HomePage = require('../pageobjects/Home.page');
let testData = 'Creators: Matt Duffer, Ross Duffer';

describe('5- Check if exist in the list the item with text “​Creators: Matt Duffer, Ross Duffer” ', () => {
    it('should check success', () => {
        HomePage.open();
        HomePage.getValidationToText();
        let text = `//p[contains(text(),'${testData}')]`;
        browser.$(`${text}`).isDisplayed(2000);
    });
});