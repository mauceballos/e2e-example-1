const HomePage = require('../pageobjects/Home.page');
let testData = require('../entities/credentials').credentials.validCredential;

describe('1- Create an item ', () => {
    it('should Create Item with valid text', () => {
        HomePage.open();
        HomePage.getHomePage(testData);
    });
});