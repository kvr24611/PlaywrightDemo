const {test, expect} = require("@playwright/test");

test("Verify Autosuggestion", async ({ page }) => {

    await page.goto("https://www.google.com");

    await page.locator("//textarea[@name='q']").type("Best Programming Language");

    await page.waitForSelector("//li[@role='presentation']", {state: "visible"});

    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("ArrowDown");

    await page.waitForTimeout(2000);

    await page.keyboard.press("Enter");

});

test("Verify Application Title", async ({ page }) => {

    await page.goto("https://www.bing.com");

    await page.locator("//textarea[@name='q']").type("Best Programming Language");

    await page.waitForSelector("//li[@role='option']", {state: "visible"});

    const elements = await page.$$("//li[@role='option']");

    for (let i = 0; i < elements.length; i++) {
        
        let text = await elements[i].textContent()

        if (text.includes('ai')) {
            await elements[i].click();
            break;
        }
    
    }

});