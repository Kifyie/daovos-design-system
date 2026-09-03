import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 120)); });
page.on('pageerror', (e) => errors.push(e.message.slice(0, 120)));

await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.waitForTimeout(3600);

// find pin start
const pinTop = await page.evaluate(() => {
  const pin = document.querySelector('.who-pin');
  const st = pin?.getBoundingClientRect();
  return window.scrollY + (st ? st.top : 0);
});

// Scroll into pin: 4 segments across 340% viewport height
const total = Math.round(900 * 3.4);

for (const [label, frac] of [['slide1', 0.08], ['slide2', 0.38], ['slide3', 0.63], ['slide4', 0.88]]) {
  await page.evaluate(({ pinTop, total, frac }) => {
    window.scrollTo({ top: pinTop + total * frac, behavior: 'instant' });
  }, { pinTop, total, frac });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `C:/Users/sunny/AppData/Local/Temp/opencode/v6-${label}.png` });
}

// outro
await page.evaluate(({ pinTop, total }) => {
  window.scrollTo({ top: pinTop + total + 900, behavior: 'instant' });
}, { pinTop, total });
await page.waitForTimeout(1800);
await page.screenshot({ path: 'C:/Users/sunny/AppData/Local/Temp/opencode/v6-outro.png' });

const state = await page.evaluate(() => {
  const cs = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return 'MISSING';
    const s = getComputedStyle(el);
    return { opacity: s.opacity.slice(0, 6), transform: s.transform.slice(0, 30) };
  };
  return {
    docHeight: document.body.scrollHeight,
    slide1: cs('.who-slide'),
    ledger: cs('.who-ledger-text'),
    pinSpacer: document.querySelector('.who-pin')?.parentElement?.className.slice(0, 40)
  };
});
console.log('ERRORS:', errors.length ? errors.join(' | ') : 'NONE');
console.log(JSON.stringify(state, null, 2));
await browser.close();
