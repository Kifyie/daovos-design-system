import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.stack));
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.waitForTimeout(3600);
console.log(errors.join('\n\n').slice(0, 3000) || 'NO ERRORS');
const html = await page.evaluate(() => document.querySelector('.daovos-website-root')?.innerHTML.length ?? 'NO ROOT');
console.log('ROOT HTML LEN:', html);
await browser.close();
