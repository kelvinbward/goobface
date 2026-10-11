import { test, expect } from '@playwright/test';

test.describe('Smoke Tests for SSR Hydration Regressions', () => {

  // We want to catch specific SSR errors globally.
  // We'll set this up per-test so that we don't bleed state,
  // but it applies to any page load in these tests.
  test.beforeEach(async ({ page }) => {
    let uncaughtSsrErrors = 0;
    page.on('console', msg => {
      if (msg.type() === 'error') {
        const text = msg.text();
        if (text.includes('ReferenceError: window is not defined') || text.includes('ReferenceError: document is not defined')) {
          uncaughtSsrErrors++;
        }
      }
    });

    // Store it on the page object so we can assert on it later
    (page as any).__uncaughtSsrErrors = () => uncaughtSsrErrors;
  });

  test.afterEach(async ({ page }) => {
     // Assert zero uncaught window/document errors during the test
     expect((page as any).__uncaughtSsrErrors()).toBe(0);
  });

  test('Root (/) - Loads status 200, space canvas mounts', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);

    // Verify space canvas container mounts
    const spaceCanvas = page.locator('#space-canvas');
    await expect(spaceCanvas).toBeVisible();
  });

  test('Audio Lab (/audio) - Loads status 200, audio controls and oscilloscope exist', async ({ page }) => {
    const response = await page.goto('/audio');
    expect(response?.status()).toBe(200);

    // Verifies audio controls
    const distortionControl = page.locator('#distortion-dist');
    await expect(distortionControl).toBeVisible();

    const delayControl = page.locator('#delay-wet');
    await expect(delayControl).toBeVisible();

    // Verifies oscilloscope container
    const audioCanvas = page.locator('#audio-canvas');
    await expect(audioCanvas).toBeVisible();
  });

  test('3D Printing Lab (/3d-printing) - Loads status 200, verifies printer manifest content renders', async ({ page }) => {
    const response = await page.goto('/3d-printing');
    expect(response?.status()).toBe(200);

    // Verifies printer manifest content renders
    await expect(page.getByText('Ender-3 Pro (Direct Drive)')).toBeVisible();
    await expect(page.getByText('Silent 4.2.7 + CR Touch + Linear Rails')).toBeVisible();
  });

  test('Config Viewer (/3d-printing/configs) - Loads status 200, verifies Klipper config entries load', async ({ page }) => {
    const response = await page.goto('/3d-printing/configs');
    expect(response?.status()).toBe(200);

    // Verifies Klipper config entries load
    await expect(page.getByText('printer.cfg')).toBeVisible();
    await expect(page.getByText('mainsail.conf')).toBeVisible();
  });

});
