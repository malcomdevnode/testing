const puppeteer = require('puppeteer');

(async () => {
  // Start browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Akses halaman yang diinginkan
  await page.goto('https://www.google.com', {
      timeout: 5 * 1000,
      waitUntil: ["domcontentloaded"],
  });

  // Tunggu selama 2 detik
  await page.waitForTimeout(2000);  // Tunggu selama 2 detik (2000 ms)

  // Lakukan sesuatu setelah menunggu
  console.log("Tunggu 15 detik selesai!");

  // Ambil screenshot
  await page.screenshot({ path: 'screenshot.png' });

  // Tutup browser
  await browser.close();
})();
