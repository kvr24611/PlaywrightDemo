const {test, expect} = require("@playwright/test");

test("Verify Keyboard Events", async ({ page }) => {

    await page.goto("https://www.google.com");

    await page.locator("//textarea[@name='q']").focus();

    await page.keyboard.type("Kabir Panthi!");

    await page.waitForTimeout(1000);

    await page.keyboard.press("ArrowLeft");

    await page.keyboard.down("Shift");

    for (let i = 0; i < 'Panthi'.length; i++) {
    
        await page.keyboard.press("ArrowLeft");
    
    }

    await page.keyboard.up("Shift");

    await page.keyboard.press("Backspace");


    /*
    await page.locator("//textarea[@name='q']").type("Kabir", {delay: 100});
    
    await page.keyboard.press("Meta+A");

    await page.keyboard.press("Meta+C");

    await page.keyboard.press("Backspace");

    await page.waitForTimeout(1000);
    
    await page.keyboard.press("Meta+V");
    
    await page.keyboard.press("Enter");

    */

})