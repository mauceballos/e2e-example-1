const HomePage = require('../pageobjects/Home.page');
const ListItems = require('../pageobjects/list.items');
let testData = require('../entities/credentials').credentials.updateCredential;
describe('My List Item page', () => {
    it('should check btn success', () => {
        HomePage.open();
        HomePage.getHomePage(0);
        ListItems.checkBtn(testData.text, testData.name);
    });
});