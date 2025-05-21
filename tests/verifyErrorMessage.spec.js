const {test, expect} = require ('@playwright/test');

test("Verify Error Message", async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    await page.getByPlaceholder("Username").type("admin", {delay: 100});
    await page.getByPlaceholder("password").type("admin", {delay: 100});

    await page.locator("//button[@type='submit']").click();

    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent();
   
    console.log("Error Message: ", errorMessage);

    // expect(errorMessage.includes("Invalid"));

    // expect(errorMessage).toContain("Invalid credentials");

    expect(errorMessage === "Invalid credentials").toBeTruthy();

})