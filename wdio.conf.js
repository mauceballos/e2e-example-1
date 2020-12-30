const type = process.env.TYPE;
const capa = require('./test/config/capa')
const capability = Object.values(capa[type]);
exports.config = {
    runner: 'local',
    specs: [
        'test/specs/**.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,
   
    capabilities : capability,
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    after: async function (result, capabilities, specs) {
        var name = "Error-" + Date.now();
        browser.saveScreenshot("test/screenShots/screenShots" + name + ".png");
    },
    
}
