const randomNumber = require('../lib/random.helper');
const itemDetail = require('../component/item.detail.component');
const locator = '[ng-model="items"]';
const editBtnLocator = '[ng-click="strangerlist.setCurrentItem(item)"]';
const deleteBtnLocator = '[ng-click="strangerlist.open(item)"]';
const confirmationModal = require('../component/modal.component');

class ListComponent {

    getItemsList(){
        $(`${locator}`).isDisplayed(8000);
        let list = browser.$$(`${locator} li`);
        return list;
    }

    getItemToEdit(testData){
        let ItemsList = this.getItemsList();
        //get Random position 
        let pos = randomNumber.getRandomInt(0, ItemsList.length);
        //Select Random Item to edit
        ItemsList[pos].$(`${editBtnLocator}`).click();
        browser.pause(5000);
        testData.name = 'Update Item';
        console.log(testData);
        itemDetail.getItemDetail(testData);
        const text = ItemsList[pos].$(`.story.ng-binding`).getText();
        if(text == 'Will is hunted - update'){console.log('Update Item!!!!')}
        return this;
    }

    getItemToDelete(testData){
        
        let  ItemsList = this.getItemsList();
        //filter the item created
        ItemsList.forEach(e => {
            let pic = e.$(`.story.ng-binding`).getText();
            if(pic === 'testing text area'){
                e.scrollIntoView();
                e.$(`${deleteBtnLocator}`).click();
                confirmationModal.getModal();

            }
        })

        let newList = this.getItemsList();
        
        let result = newList.some(e => e.$(`figure img`) === 'pic.jpg');

        return this;
    }

}

module.exports = new ListComponent();