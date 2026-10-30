import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900 });
await p.goto('http://127.0.0.1:4310/shurhaev-cargo/', { waitUntil: 'networkidle2' });
await p.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; });
await p.evaluate(() => document.fonts.ready);
await new Promise(r => setTimeout(r, 600));
const pre = await p.evaluate(() => Math.round(document.querySelector('#holod').getBoundingClientRect().top + window.scrollY));
await p.evaluate(y => window.scrollTo({ top: y - 500, behavior: 'instant' }), pre);
await new Promise(r => setTimeout(r, 1200));
const st = await p.evaluate(() => Math.round(document.querySelector('.cold__stage').getBoundingClientRect().top + window.scrollY));
for (const off of [40, 500, 1000, 1440]) {
  await p.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), st + off);
  await new Promise(r => setTimeout(r, 500));
  console.log(off, await p.evaluate(() => ({
    cls: document.querySelector('.cold').className.replace('section cold', '').trim(),
    y: Math.round(document.querySelector('.cold__stage').getBoundingClientRect().top),
    mover: document.querySelector('.mover').style.transform,
    cnt: document.querySelector('.cold__count').textContent.trim(),
  })));
}
await b.close();
