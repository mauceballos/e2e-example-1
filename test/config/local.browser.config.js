module.exports = [
        {
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--incognito',
                '--UnexpectedAlertBehaviour',
                '--disable-popup-blocking',
                '--disable-infobars',
                '--start-fullscreen', //BROWSER VIEW
                '--disable-notifications',
                "--disable-web-security",
                // '--auto-open-devtools-for-tabs'
                // '--headless'
            ]
        }
    }
];