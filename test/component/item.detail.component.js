const filePath = './test/config/pic.jpg';
class ItemDetail {

    get detailComponent() { return $(`.details form.strangerlist.detailsForm`) }
    get TextArea() { return $(`textarea`) }
    get btnChooseFile() { return $('.controls input#inputImage') }
    btn(name) { return $(`//button[contains(text(),'${name}')]`) }

    getItemDetail(testData) {
        this.detailComponent.isDisplayed(8000);
        const remoteFilePath = browser.uploadFile(testData.filePath);
        this.btnChooseFile.isDisplayed(8000);
        this.btnChooseFile.setValue(remoteFilePath);
        this.TextArea.isDisplayed(8000);
        this.TextArea.setValue(testData.text);
        if (testData.validation) {
            $('button.btn-success[disabled="disabled"]').isDisplayed(3000);
            expect(this.btn(testData.name)).toBeDisabled();
        } else {
            this.btn(testData.name).click();
        }
        return this;
    }
}

module.exports = new ItemDetail();