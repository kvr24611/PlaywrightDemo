const {test, expect} = require ('@playwright/test');

test("Verify Application Title", async ({page}) => {
    await page.goto("https://www.google.com");
    
    const url = await page.url()
    console.log("URL is " + url);

    const title = await page.title();
    console.log("Title is " + title);

    await expect(title).toBe("Google");
    await expect(page).toHaveTitle("Google");
})