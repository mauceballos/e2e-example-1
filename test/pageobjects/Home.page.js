const Page = require('./page');
class Homepage extends Page {

    get element() { return $("#top") }
    get parent() { return $('#content') }
    get child() { return this.parent.$$('div') }


    getHomePage(pos) {
        let alterUrl = [];
        this.element.isDisplayed(30000);
        this.child.forEach(e => {
            let a = e.getAttribute('ng-include');
            alterUrl.push(a.replace(/\'/g, ""));
        });
        this.openNew(alterUrl[pos])
        return this;
    }

    open() {
        return super.open();
    }
    openNew(type){
        return super.openAlterUrl(type)
    }

}

module.exports = new Homepage();