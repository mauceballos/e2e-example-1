const HomePage = require('../pageobjects/Home.page');
let testData = require('../entities/credentials').credentials.updateCredential;

describe('2- Edit another existing item', () => {
    it('should Update Item with valid text', () => {
        HomePage.open();
        HomePage.getHomePage(testData);
    });
});