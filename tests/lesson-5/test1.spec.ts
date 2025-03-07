import {test} from '@playwright/test';

test('Test 1', async ({page}) => {
  await test.step('Navigate to the material Playwright', async () => {
      await page.goto('https://material.playwrightvn.com/');
  });
  await test.step('Click on "Bai hoc 1"', async () => {
      await page.locator('//a[@href="01-xpath-register-page.html"]').click();
  });
  await test.step('Fill out information', async () => {
    await page.locator('//input[@id="username"]').fill('Nguyen Mai Uyen');
    await page.locator('//input[@id="email"]').fill('uyen@gmail.com');
    await page.locator('//input[@id="female"]').check();
    await page.locator('//input[@id="reading"]').check();
    await page.locator('//option[@value="music"]').click();
    await page.locator('//select[@id="country"]').selectOption({value: 'canada'});
    await page.locator('//input[@id="dob"]').pressSequentially('25/09/2000');
    await page.locator('//input[@id="profile"]').setInputFiles('tests/lesson-5/profile.jpg')
    await page.locator('//textarea[@id="bio"]').fill('Gioi thieu ve ban than');
    await page.locator('//div[@class="tooltip"]').hover();
    await page.locator('//input[@id="newsletter"]').check();
    await page.locator('//input[@id="rating"]').press('ArrowRight');
    await page.locator('//span[@class="slider round"]').click();
    await page.locator('//button[@type="submit"]').click();
  });
});