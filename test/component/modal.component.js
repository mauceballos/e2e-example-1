
class ModalComponent {

    get modal() { return $(`.modal-dialog`)}
    
    get btnDelete(){ return $(`.btn.btn-primary`)}

    getModal(){
        this.modal.isDisplayed(8000);
        this.btnDelete.isDisplayed(8000);
        this.btnDelete.click();
        return this;
    }
}

module.exports = new ModalComponent();