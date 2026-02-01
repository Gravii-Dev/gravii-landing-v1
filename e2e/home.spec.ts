import { expect, test } from '@playwright/test'

test.describe('Home page', () => {
  test('loads and has skip to main content link', async ({ page }) => {
    await page.goto('/')
    const skipLink = page.getByRole('link', { name: /skip to main content/i })
    await expect(skipLink).toBeVisible()
    await expect(skipLink).toHaveAttribute('href', '#main-content')
  })

  test('has main content landmark', async ({ page }) => {
    await page.goto('/')
    const main = page.getByRole('main', { name: '' })
    await expect(main).toBeVisible()
    await expect(main).toHaveId('main-content')
  })

  test('skip link focuses main content on click', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: /skip to main content/i }).click()
    await expect(page.locator('#main-content')).toBeFocused()
  })
})
