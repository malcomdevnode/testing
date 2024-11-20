const puppeteer = require('puppeteer');

(async () => {
  // Start browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // viewport and device scale factor of my laptop
  await page.setViewport({
      width: 2880,
      height: 1800,
      deviceScaleFactor: 2,
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
