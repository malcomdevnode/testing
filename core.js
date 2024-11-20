const puppeteer = require('puppeteer');

(async () => {
  // Start browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport untuk ponsel Android
  await page.setViewport({
    width: 360,
    height: 640,
    deviceScaleFactor: 3, // Resolusi umum untuk ponsel modern
  });

  // Set user agent ke Chrome
  await page.setUserAgent(
    'Mozilla/5.0 (Linux; Android 10; Mobile; rv:109.0) Gecko/20100101 Chrome/109.0.0.0 Safari/537.36'
  );

  // Tambahkan referer di header permintaan
  await page.setExtraHTTPHeaders({
    referer: 'https://www.google.com',
  });
  
  // Akses halaman yang diinginkan
  await page.goto('https://brainlyenus.blogspot.com/', {
      timeout: 15 * 1000,
      waitUntil: ["domcontentloaded"],
  });

  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    },15000);
  });

  // Lakukan sesuatu setelah menunggu
  console.log("Tunggu 15 detik selesai!");

  // Ambil screenshot
  await page.screenshot({ path: 'screenshot.png' });

  // Tutup browser
  await browser.close();
})();
