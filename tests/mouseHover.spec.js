const {test, expect} = require("@playwright/test");

test("Valid Login", async function({ page }){

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.locator("#email1").type("admin@email.com", {delay: 100});
    await page.locator("#password1").type("admin@123", {delay: 100});
    
    // await page.locator("button[type='submit']").click();
    await page.getByRole("button", {name: "Sign in"}).click();

    await page.waitForTimeout(2000);

    await page.locator("//span[text()='Manage']").hover({force: true});

    await page.locator("//a[normalize-space()='Manage Courses']").click();

    await page.waitForTimeout(2000);

})