
class RandomHelper {

    getNewNumber(number){
        let x = this.getRandomInt(0, 30);
        return x + number;
    }

    getRandomInt(min, max) {
        const x = Math.floor(Math.random() * (max - min)) + min;
        return x;
    }

    getRandomNumber() {
        let x = this.getRandomInt(0, 99);
        return x;
    }

    getRandomItem(obj){
        var objArray = Object.keys(obj);
        var randomNumber = Math.random();
        var objIndex = Math.floor(randomNumber * objArray.length);

        var randomKey = objArray[objIndex];
        // This will course this will return the value of the randomKey
        // instead of a fresh random value
        var randomValue = obj[randomKey];
        return randomValue;
    }

    getDeleteItem(obj) {
        for (var i = 3; i = obj.length; i--){
        var objArray = Object.keys(obj);
        var randomNumber = Math.random();
        var objIndex = Math.floor(randomNumber * objArray.length);

        var randomKey = objArray[objIndex];
        // This will course this will return the value of the randomKey
        // instead of a fresh random value
        // var randomValue = obj[randomKey];
        delete obj[randomKey];
        }
        return obj;
    }

     generateRandomString(length) {
        var text = "";
        var possibleX = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

}
module.exports = new RandomHelper();