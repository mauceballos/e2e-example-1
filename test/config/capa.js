module.exports = {web: [
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
],
mobile :[{
    maxInstances: 1,
    browserName: "chrome",
    'goog:chromeOptions': {
        mobileEmulation: {
            deviceName: 'Pixel 2'
            // deviceName: 'iPhone X'
        },
        args: ['--incognito', 
        // '--auto-open-devtools-for-tabs', 
        "--disable-web-security"
    ]
    }
}]
};