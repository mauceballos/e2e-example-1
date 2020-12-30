module.exports = [{
    maxInstances: 1,
    browserName: "chrome",
    'goog:chromeOptions': {
        mobileEmulation: {
            deviceName: 'Pixel 2'
            // deviceName: 'iPad Pro'
            // deviceName: 'iPhone X'
        },
        args: ['--incognito', '--auto-open-devtools-for-tabs', "--disable-web-security"]
    }
}];
