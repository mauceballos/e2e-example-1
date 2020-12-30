const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/Home.page');
const ItemDetailPage = require('../pageobjects/Item.Detail.page');
let testData = require('../entities/credentials').credentials.InvalidCredential;
describe('My Create Item', () => {
    it('should Create Item with valid text', () => {
        HomePage.open();
        HomePage.getHomePage(1);
        ItemDetailPage.CreateItem(testData.text, testData.name);
        //TODO: b.- report at least 3 bugs and write a test case for each bug report that should pass if the issue is fixed 
        expect(SecurePage.flashAlert).toBeExisting();
    });
});