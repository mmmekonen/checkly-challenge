import { expect, test } from '@playwright/test'

test('CTA button has "Start for free" text', async ({ page }) => {
    await page.goto('https://checklyhq.com/')

    // CTA button locator
    const button = page.locator('#nav-signup-button')

    // Assert that the button has the correct text
    await expect(button).toHaveText('Start for freeeeeeee')
})