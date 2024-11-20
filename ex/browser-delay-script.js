// https://grafana.com/docs/k6/v0.53.x/javascript-api/k6-browser/page/waitforfunction/
// Waiting until the h1 element has mutated.
const ok = await page.waitForFunction("document.querySelector('h1')", {
  polling: 'mutation',
  timeout: 2000,
});


// https://grafana.com/docs/k6/v0.53.x/javascript-api/k6-browser/page/waitforloadstate/
// ... perform some actions that reload part of the page.

// waits for the default `load` event.
await page.waitForLoadState();


// https://grafana.com/docs/k6/v0.53.x/javascript-api/k6-browser/page/waitfornavigation/
// The click action will start a navigation, and the waitForNavigation
// will help the test wait until the navigation completes.
await Promise.all([page.waitForNavigation(), submitButton.click()]);


// https://grafana.com/docs/k6/v0.53.x/using-k6-browser/recommended-practices/simulate-user-input-delay/
await page.goto('https://test.k6.io/browser.php');
const text = page.locator('#input-text-hidden');
await text.waitFor({
  state: 'hidden',
});


// https://grafana.com/docs/k6/v0.53.x/javascript-api/k6-browser/page/waitfortimeout/
// Slow the test down to mimic a user looking for the element on the page.
await page.waitForTimeout(1000);




