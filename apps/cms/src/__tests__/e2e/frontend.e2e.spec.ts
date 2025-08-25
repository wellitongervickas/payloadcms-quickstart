import { test, expect, Page } from '@playwright/test'

test.describe('Frontend', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let page: Page

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext()
    page = await context.newPage()
  })

  test('can go on homepage', async ({ page }) => {
    await page.goto('http://localhost:3000')

    await expect(page).toHaveTitle(/Repo - Home/)

    const headging = page.locator('h1').first()

    await expect(headging).toHaveText('Welcome')
  })
})
