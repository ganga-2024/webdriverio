const { remote } = require("webdriverio");

const caps = {
    platformName: "Android",
    platformVersion: "10",
    deviceName: "OnePlus 5T",
    app: "C:/Users/GANGA/Downloads/raincan.apk",
    udid: "7f449025", 
    appPackage: "com.raincan.android.hybrid",
    appActivity: "com.bigbasket.homemodule.views.activity.HomeActivityBB2",
    automationName: "UiAutomator2"
};

async function testApp() {
    const driver = await remote({
        path: "/wd/hub",
        port: 5037,
        capabilities: caps
    });

    await driver.pause(5000); // Wait for app to load

    // Find the search button and click
    const searchButton = await driver.$("android.widget.TextView[text='Search']");
    await searchButton.click();

    // Enter "carrots" in the search box
    const searchBox = await driver.$("android.widget.EditText");
    await searchBox.setValue("carrots");

    // Press Enter
    await driver.pressKeyCode(66); // Keycode 66 is Enter

    await driver.pause(5000); // Wait for results

    await driver.deleteSession();
}

testApp().catch(console.error);