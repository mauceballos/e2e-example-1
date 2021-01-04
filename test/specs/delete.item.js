const HomePage = require('../pageobjects/Home.page');
let testData = require('../entities/credentials').credentials.deleteItemCredential;

describe('3- Delete the item created    ', () => {
    it('should Delete Item success', () => {
        HomePage.open();
        HomePage.getHomePage(testData);
    });
});