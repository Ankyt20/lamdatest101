import { test,expect } from "@playwright/test";


test("Input Form Submit - displays correct message", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");

  await page.click("//a[text()='Input Form Submit']");

  const nameField = page.locator('//input[@id="name"]');
  const emailField = page.locator("//input[@id='inputEmail4']");
  const passwordField = page.locator('input[name="password"]');
  const companyField = page.locator('input[name="company"]');
  const websiteField = page.locator('input[name="website"]');
  const countryField = page.locator('select[name="country"]');
  const cityField = page.locator('input[name="city"]');
  const address1Field = page.locator('input[name="address_line1"]');
  const address2Field = page.locator('input[name="address_line2"]');
  const stateField = page.locator("#inputState");
  const zipField = page.locator("#inputZip");
  const submitButton = page.locator('div.text-right.mt-20 button[type="submit"]');
  const successMessage = page.locator(".success-msg");

  await submitButton.click();

  await nameField.fill("Rohan");
  await emailField.fill("Rohan@example.com");
  await passwordField.fill("password123");
  await companyField.fill("Company Name");
  await websiteField.fill("https://www.example.com");
  await countryField.selectOption({ label: "United States" });
  await cityField.fill("New York");
  await address1Field.fill("test");
  await address2Field.fill("test");
  await stateField.fill("NY");
  await zipField.fill("10001");

  await submitButton.click();
  //verfiy the attributes
  await expect(nameField).toHaveAttribute("required", "");
  await expect(emailField).toHaveAttribute("required", "");
  await expect(passwordField).toHaveAttribute("required", "");
  await expect(companyField).toHaveAttribute("required", "");
  await expect(websiteField).toHaveAttribute("required", "");
  await expect(cityField).toHaveAttribute("required", "");
  await expect(address1Field).toHaveAttribute("required", "");
  await expect(address2Field).toHaveAttribute("required", "");
  await expect(stateField).toHaveAttribute("required", "");
  await expect(zipField).toHaveAttribute("required", "");


  await expect(successMessage).not.toBeVisible();

  await expect(successMessage).toBeVisible();
  await expect(successMessage).toHaveText("Thanks for contacting us, we will get back to you shortly.");
});