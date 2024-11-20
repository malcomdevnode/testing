const puppeteer = require('puppeteer');

(async () => {
  // Membuka browser
  const browser = await puppeteer.launch({ headless: true, timeout: 15000 });
  const page = await browser.newPage();

  // Akses URL
  await page.goto('https://www.google.com', { timeout: 15000 });

  // Misalnya, ambil screenshot setelah menunggu 15 detik
  await page.waitForTimeout(15000);

  // Ambil screenshot
  await page.screenshot({ path: 'screenshot.png' });

  console.log('Successfully completed the browsing process.');

  await browser.close();
})();
