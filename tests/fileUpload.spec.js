const {test, expect} = require('@playwright/test');

test("Verify File Upload", async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("//input[@id='file-upload']").setInputFiles("./uploads/1.png");

    await page.locator("#file-submit").click();
    
    await expect(page.locator("//h3")).toHaveText("File Uploaded!");    

    await page.waitForTimeout(2000);

    // await page.close();
})