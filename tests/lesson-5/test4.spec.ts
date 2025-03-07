import {test} from '@playwright/test'

test('Test 4', async ({ page }) => {
  await test.step('Navigate to the material Playwright', async () => {
    await page.goto('https://material.playwrightvn.com/');
  });
  await test.step('Click on "Bai hoc 4"', async () => {
    await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
  });
  await test.step('Add personal note', async () => {
   await page.goto('https://vnexpress.net/khoa-hoc');
   // bo sung sau a. Em chua nghi ra
  
  });
 
});
