const { test, expect } = require('@playwright/test');

test("Working with Load State", async({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    await page.getByText('New user? Signup').click();

    await page.waitForLoadState('networkidle');

    const checkboxCount = await page.locator("//input[@type='checkbox']").count();

    console.log("Checkbox Count: ", checkboxCount);

    expect(checkboxCount).toBe(9);
})