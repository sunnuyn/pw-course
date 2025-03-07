import { test } from '@playwright/test';

test('Test 3', async ({ page }) => {
  await test.step('Navigate to the material Playwright', async () => {
    await page.goto('https://material.playwrightvn.com/');
  });
  await test.step('Click on "Bai hoc 3"', async () => {
    await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
  });
  await test.step('Add 100 todo items', async () => {
    for (let i = 1; i <= 100; i++) {
      const text = `Todo ${i}`;
      await page.locator('//input[@id="new-task"]').fill(text);
      await page.locator('//button[@id="add-task"]').click();
    }
  });
  await test.step('Delete odd items', async () => {
    for (let i = 1; i <= 100; i += 2) {
      const deleteButton = page.locator(`//button[@id="todo-${i}-delete"]`);
      if (await deleteButton.count() > 0) {
        await deleteButton.click();
      }
    }
    page.on('dialog', async dialog => await dialog.accept());
  });
});
