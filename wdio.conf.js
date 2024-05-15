export const config = {

    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    /*    './test/specs/testOne.js'
        './test/specs/testTwo.js'
        './test/specs/testThree.js'*/
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 1, // reduced this to 1 to run tests in sequence for better visibility

    capabilities: [
        {browserName: process.env.BROWSER || 'chrome'} // Get browser from environment variable, else run Chrome
    ],                                                 // run set BROWSER=firefox or set BROWSER=MicrosoftEdge in cmd
                                                       // before running the tests to switch to a different browser
                                                       // could not get it to use the -- argument, was low on time to investigate

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'silent', // Simple logger is implemented to cover test steps so no need for anything more detailed for normal runs

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['reportportal'],

    framework: 'mocha',

    reporters: ['spec','html-nice'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    /** Screenshots are saved after a test fails. They are placed in error-screenshots folder.
    Screenshot name is test name + timestamp for easier recognition.
    Good improvement on this would be to convert the time to a more friendly format, i.e. YYYY-MM-DD-HH-MM-SS **/
    afterTest: async function (test, context, { error }) {
        if (error) {
            var timestamp = Date.now();
            var screenshotPath = `./error-screenshots/${test.title} ${timestamp}.png`;
            await browser.saveScreenshot(screenshotPath);
            console.log(`Screenshot saved: ${screenshotPath}`);
        }
    }

}
