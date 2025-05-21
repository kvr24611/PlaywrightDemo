const {test, expect} = require ('@playwright/test');

test("My first test", async ({page}) => {
    expect(12).toBe(12);
})

test.skip("My second test", async ({page}) => {
    expect(12).toBe(121);
})

test("My third test", async ({page}) => {
    expect(2.1).toBe(2.1);
})

test("My fourth test", async ({page}) => {
    expect("This is me, Kabir.").toContain("Kabir");
    expect(true).toBeTruthy();
})

test("My fifth test", async ({page}) => {
    expect(false).toBeFalsy();
})

test("My sixth test", async ({page}) => {
    expect("This is me, Kabir.".includes("Kabir")).toBeTruthy();
})