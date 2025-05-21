import { expect } from '@playwright/test';

export class HomePage {

    constructor(page){
        this.page = page;
        this.manageOption = "//span[normalize-space()='Manage']";
        this.menu = "//img[@alt='menu']";
        this.logOutOption = "//button[normalize-space()='Sign out']";
    };

    async verifyManageOption(){

        await expect(this.page.locator(this.manageOption)).toBeVisible();

    }

    async logoutFromApplication(){

        await this.page.click(this.menu);
        await this.page.click(this.logOutOption);
    }

}