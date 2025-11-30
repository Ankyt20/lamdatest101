import {test,expect} from '@playwright/test' ;

test('drag drop',async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground");

    await page.getByText("Drag & Drop Sliders").click();
    const slider = page.locator("input[type='range']").nth(2);
    await expect(slider).toHaveValue('15');

    await slider.fill('95');
    const value = await page.locator('//output[@id="rangeSuccess"]');
    expect (value).toHaveText('95');
     await page.waitForTimeout(4000);



});