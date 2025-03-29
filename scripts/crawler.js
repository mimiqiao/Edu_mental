import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 创建PNG目录
const pngDir = path.join(__dirname, '../public/images/Notioly-Free-Pack/PNG');
if (!fs.existsSync(pngDir)) {
  fs.mkdirSync(pngDir, { recursive: true });
}

async function downloadImage(url, filename) {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filename, Buffer.from(buffer));
    console.log(`Downloaded: ${filename}`);
  } catch (error) {
    console.error(`Error downloading ${filename}:`, error);
  }
}

async function crawlNotioly() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });

  try {
    const page = await browser.newPage();
    
    // 设置视口大小
    await page.setViewport({ width: 1920, height: 1080 });
    
    // 访问目标网站
    console.log('Navigating to Notioly...');
    await page.goto('https://notioly.com/', {
      waitUntil: 'networkidle0',
      timeout: 60000
    });

    // 等待图片加载
    await page.waitForSelector('img');

    // 获取所有图片
    const images = await page.evaluate(() => {
      const imgElements = document.querySelectorAll('img');
      return Array.from(imgElements).map(img => ({
        name: img.alt || img.src.split('/').pop(),
        url: img.src
      }));
    });

    console.log(`Found ${images.length} images`);

    // 下载图片
    for (const image of images) {
      if (image.url.startsWith('http')) {
        const filename = path.join(pngDir, `${image.name.replace(/[^a-zA-Z0-9]/g, '_')}.png`);
        await downloadImage(image.url, filename);
        // 添加延迟以避免请求过快
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

  } catch (error) {
    console.error('Error during crawling:', error);
  } finally {
    await browser.close();
  }
}

crawlNotioly().then(() => {
  console.log('Crawling completed!');
}).catch(error => {
  console.error('Crawling failed:', error);
});