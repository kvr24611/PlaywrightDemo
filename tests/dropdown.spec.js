const { test, expect } = require('@playwright/test');

test("Select Values from Dropdown", async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    
    /*
        label
        value
        index
    */

    await page.locator("#state").selectOption({label: "Bihar"});

    // await page.waitForTimeout(1000);

    await page.locator("#state").selectOption({value: "Himachal Pradesh"});

    // await page.waitForTimeout(1000);

    await page.locator("#state").selectOption({index: 4});

    // await page.waitForTimeout(3000);

    const value = await page.locator("#state").textContent()

    await expect(value.includes("Kerala")).toBeTruthy();

    let state = await page.$("#state");

    let allElements = await state.$$("option");

    let dropDownStatus = false;

    for (let i = 0; i < allElements.length; i++) {
        let element = allElements[i];
        let value = await element.textContent();

        console.log("Value from dropdown " + value);

        if (value === "Kerala") {
            dropDownStatus = true;
            break;
        }

    }
    
    await expect(dropDownStatus).toBeTruthy();

    await page.locator("#hobbies").selectOption(['Playing', 'Swimming']);

    await page.waitForTimeout(3000);

})