const HomePage = require('../pageobjects/Home.page');
let testData = require('../entities/credentials').credentials.InvalidTextCredential;

describe('4- Check max long in description', () => {
    it('should Create Item with invalid text', () => {
        HomePage.open();
        HomePage.getHomePage(testData);
    });
});