const HomePage = require('../pageobjects/Home.page');
const ListItems = require('../pageobjects/list.items');
let testData = require('../entities/credentials').credentials.updateCredential;
describe('My Update Item', () => {
    it('should Update Item success', () => {
        HomePage.open();
        HomePage.getHomePage(0);
        //TODO:b.- report at least 3 bugs and write a test case for each bug report that should pass if the issue is fixed 
        ListItems.updateOrDeleteItem(testData.text, testData.name);
    });
});