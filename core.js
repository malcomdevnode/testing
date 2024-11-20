const puppeteer = require('puppeteer');

(async () => {
  // Start browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Akses halaman yang diinginkan
  await page.goto('https://www.google.com');

  // Tunggu selama 15 detik
  await page.waitForTimeout(15000);  // Tunggu selama 15 detik (15000 ms)

  // Lakukan sesuatu setelah menunggu
  console.log("Tunggu 15 detik selesai!");

  // Ambil screenshot
  await page.screenshot({ path: 'screenshot.png' });

  // Tutup browser
  await browser.close();
})();
