import { chromium } from 'playwright';
import path from 'node:path';

const browser = await chromium.launch({ headless: true });
const outputDir = path.resolve('output/playwright');

async function openPage(options, viewport) {
  const context = await browser.newContext({ ...options, viewport });
  const page = await context.newPage();
  const messages = [];
  page.on('console', (message) => {
    if (message.type() === 'error') messages.push(`console: ${message.text()}`);
  });
  page.on('pageerror', (error) => messages.push(`pageerror: ${error.message}`));
  await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500);
  return { context, page, messages };
}

async function sectionPosition(page, selector) {
  return page.evaluate((targetSelector) => {
    const element = document.querySelector(targetSelector);
    if (!element) throw new Error(`Missing ${targetSelector}`);
    const target = element.parentElement?.classList.contains('pin-spacer')
      ? element.parentElement
      : element;
    let top = 0;
    let node = target;
    while (node) {
      top += node.offsetTop || 0;
      node = node.offsetParent;
    }
    return {
      top,
      distance: Math.max(0, target.offsetHeight - window.innerHeight)
    };
  }, selector);
}

async function capture(page, selector, progress, name, wait = 1800) {
  const position = await sectionPosition(page, selector);
  const targetY = position.top + position.distance * progress;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    await page.evaluate((nextY) => window.scrollTo(0, nextY), targetY);
    await page.waitForTimeout(attempt === 0 ? 900 : wait);
  }
  await page.screenshot({ path: path.join(outputDir, name) });
  return page.evaluate((targetSelector) => {
    const section = document.querySelector(targetSelector);
    const stage = section?.querySelector('[class$="-stage"]');
    const scene = section?.querySelector('.atlas-scene');
    return {
      scrollY: window.scrollY,
      sectionRect: section?.getBoundingClientRect().toJSON(),
      stageRect: stage?.getBoundingClientRect().toJSON(),
      sceneVisibility: scene ? getComputedStyle(scene).visibility : null,
      sceneOpacity: scene ? getComputedStyle(scene).opacity : null
    };
  }, selector);
}

const desktop = await openPage({}, { width: 1440, height: 900 });
const desktopMetrics = await desktop.page.evaluate(() => ({
  scrollHeight: document.documentElement.scrollHeight,
  scrollWidth: document.documentElement.scrollWidth,
  viewportWidth: window.innerWidth,
  atlasCount: document.querySelectorAll('.atlas-root').length,
  finaleCount: document.querySelectorAll('.finale-root').length,
  ditherCanvases: document.querySelectorAll('.daovos-dither-field canvas').length
}));

for (const [name, progress] of [
  ['entry', 0.03],
  ['websites', 0.1],
  ['landing', 0.25],
  ['commerce', 0.4],
  ['interfaces', 0.56],
  ['care', 0.72],
  ['transfer', 0.98]
]) {
  await capture(desktop.page, '.atlas-root', progress, `fabrication-desktop-${name}.png`);
}

for (const [name, progress] of [
  ['field', 0.08],
  ['shutters', 0.4],
  ['seal', 0.68],
  ['resolved', 0.96]
]) {
  await capture(desktop.page, '.finale-root', progress, `finale-desktop-${name}.png`);
}

const desktopMessages = [...desktop.messages];
await desktop.context.close();

const mobile = await openPage({}, { width: 390, height: 844 });
const mobileAtlasState = await capture(mobile.page, '.atlas-root', 0.4, 'fabrication-mobile-commerce.png', 2200);
const mobileFinaleState = await capture(mobile.page, '.finale-root', 0.94, 'finale-mobile-resolved.png', 2200);
const mobileMetrics = await mobile.page.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  viewportWidth: window.innerWidth,
  atlasStageHeight: document.querySelector('.atlas-stage')?.getBoundingClientRect().height,
  finaleStageHeight: document.querySelector('.finale-stage')?.getBoundingClientRect().height
}));
const mobileMessages = [...mobile.messages];
await mobile.context.close();

const tablet = await openPage({}, { width: 1024, height: 768 });
const tabletAtlasState = await capture(tablet.page, '.atlas-root', 0.4, 'fabrication-tablet-commerce.png', 1800);
const tabletFinaleState = await capture(tablet.page, '.finale-root', 0.94, 'finale-tablet-resolved.png', 1800);
const tabletMetrics = await tablet.page.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  viewportWidth: window.innerWidth,
  atlasStageHeight: document.querySelector('.atlas-stage')?.getBoundingClientRect().height,
  finaleStageHeight: document.querySelector('.finale-stage')?.getBoundingClientRect().height
}));
const tabletMessages = [...tablet.messages];
await tablet.context.close();

const reduced = await openPage({ reducedMotion: 'reduce' }, { width: 1440, height: 900 });
await reduced.page.locator('.atlas-root').scrollIntoViewIfNeeded();
await reduced.page.waitForTimeout(600);
await reduced.page.screenshot({ path: path.join(outputDir, 'fabrication-reduced.png') });
await reduced.page.locator('.finale-root').scrollIntoViewIfNeeded();
await reduced.page.waitForTimeout(600);
await reduced.page.screenshot({ path: path.join(outputDir, 'finale-reduced.png') });
const reducedMetrics = await reduced.page.evaluate(() => ({
  atlasStatic: document.querySelector('.atlas-root')?.classList.contains('atlas-static'),
  finaleStatic: document.querySelector('.finale-root')?.classList.contains('finale-static'),
  atlasVisibleScenes: [...document.querySelectorAll('.atlas-scene')].filter((element) => getComputedStyle(element).visibility === 'visible').length,
  finaleSealVisible: getComputedStyle(document.querySelector('.finale-seal')).visibility
}));
const reducedMessages = [...reduced.messages];
await reduced.context.close();

console.log(JSON.stringify({
  desktopMetrics,
  mobileMetrics,
  mobileStates: { atlas: mobileAtlasState, finale: mobileFinaleState },
  tabletMetrics,
  tabletStates: { atlas: tabletAtlasState, finale: tabletFinaleState },
  reducedMetrics,
  errors: {
    desktop: desktopMessages,
    mobile: mobileMessages,
    tablet: tabletMessages,
    reduced: reducedMessages
  }
}, null, 2));

await browser.close();
