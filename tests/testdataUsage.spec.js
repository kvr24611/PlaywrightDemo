import { test, expect } from '@playwright/test';

const testdata = JSON.parse(JSON.stringify(require("../login-test-multiple.json")));

test.describe('Data-driven login test', () => {

    for (const data of testdata) {
        
        test.describe("Login with users", () => {

            test(`Login to Application ${data.id}`, async ({ page }) => {

                await page.goto('https://freelance-learn-automation.vercel.app/login');

                await page.locator("//input[@id='email1']").type(data.username, {delay: 100});

                await page.locator("//input[@id='password1']").type(data.password, {delay: 100});

                await page.waitForTimeout(2000);

            })

        })

    }
});
