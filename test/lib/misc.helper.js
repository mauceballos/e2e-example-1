
class MiscHelper {


    getReturnObjectTest(locator,type) {
        let objectType = [`${type}`];
        let elementsInput = browser.$$(`${locator} ${objectType[0]}`);

        elementsInput.filter(parameter => (parameter.getAttribute('type') == `${objectType[2]}`)).forEach(element => {
            objectCheckbox.push(this.getJustFilterElement(element))
        });

        return {
            objectListSelect,
            objectListTextField,
            objectCheckbox,
            objectListRadio
        }
    }

    getJustFilterElement(element) {
        let filterType = ['id', 'class','name'];
        let result;
        if (element.getAttribute(filterType[0]) !== null && element.getAttribute(filterType[0]) !== '' && JSON.stringify(element.getAttribute(filterType[0])) !== '') {

            if (element.getText() == '') {
                result = `[${filterType[0]}="${element.getAttribute(filterType[0])}"]`;
            } else {
                result = {
                    key: `${element.getText()}`,
                    value: `[${filterType[0]}="${element.getAttribute(filterType[0])}"]`
                }
            }
        } else if (element.getAttribute(filterType[1]) !== null && element.getAttribute(filterType[1]) != '' && JSON.stringify(element.getAttribute(filterType[1])) !== '') {
            if (element.getText() == '') {
                result = `#${element.getAttribute(filterType[1])}`;
            } else {
                result = {
                    key: `${element.getText()}`,
                    value: `#${element.getAttribute(filterType[1])}`
                }
            }
        } else if (element.getAttribute(filterType[2]) !== null && element.getAttribute(filterType[2]) != '' && JSON.stringify(element.getAttribute(filterType[2])) !== '') {
            if (element.getText() == '') {
                result = `.${element.getAttribute(filterType[2]).replace(/ /g, ".")}`;
            } else {
                result = {
                    key: `${element.getText()}`,
                    value: `.${element.getAttribute(filterType[2]).replace(/ /g, ".")}`
                }
            }
        } else {
            //don't save an element in array;
            console.log("WARNING: No se encontraron elementos!!")
        }
        return result;
    }

}
module.exports = new MiscHelper();