const HomePage = require('../pageobjects/Home.page');
let testData = require('../entities/credentials').credentials.InvalidPictureCredential;

describe('Validation Item by picture', () => {
    it('should Create Item with invalid picture', () => {
        HomePage.open();
        HomePage.getHomePage(testData);
    });

});