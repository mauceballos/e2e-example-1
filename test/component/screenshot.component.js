var randomNumber = Date.now();
class ScreenShot {

  getScreenShot() {
    browser.saveScreenshot('./test/screenShots/' + randomNumber + '-snapshot.png');
    return this;
  }

}

module.exports = new ScreenShot();