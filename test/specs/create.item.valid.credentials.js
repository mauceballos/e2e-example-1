const HomePage = require('../pageobjects/Home.page');
const ItemDetailPage = require('../pageobjects/Item.Detail.page');
let testData = require('../entities/credentials').credentials.validCredential;
describe('My Create Item', () => {
    it('should Create Item with valid text', () => {
        HomePage.open();
        HomePage.getHomePage(1);
        ItemDetailPage.CreateItem(testData.text, testData.name);
    });
});