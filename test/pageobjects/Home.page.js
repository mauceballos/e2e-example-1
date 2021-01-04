const detailComponent = require('../component/item.detail.component');
const itemList = require('../component/item.list.component');
const Page = require('./page');
class Homepage extends Page {

    get element() { return $("[ng-controller='StrangerListController as strangerlist']") }

    getHomePage(testData) {

        this.element.isDisplayed(30000);
       
        if (testData.type === 'create') { 
            
            detailComponent.getItemDetail(testData) 
        
        } else if (testData.type === 'update') {
        
            console.log('update')
            itemList.getItemToEdit(testData);
        
        }else{
        
            console.log('delete');
            itemList.getItemToDelete(testData)
        
        }

        return this;
    }

    getValidationToText(){
        this.element.isDisplayed(30000);
        return this;
    }

    open() {
        return super.open();
    }
}

module.exports = new Homepage();