import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const p = await b.newPage();
await p.setViewport({ width: 320, height: 800 });
await p.goto('http://127.0.0.1:4310/shurhaev-cargo/', { waitUntil: 'networkidle2' });
await p.evaluate(() => document.fonts.ready);
await new Promise(r => setTimeout(r, 400));
console.log(await p.evaluate(() => {
  const o = [];
  document.querySelectorAll('*').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.right > 321 && r.width > 0) o.push({ s: el.tagName + '.' + (typeof el.className === 'string' ? el.className.split(' ')[0] : ''), right: Math.round(r.right), w: Math.round(r.width), txt: (el.textContent || '').slice(0, 30) });
  });
  return o.slice(0, 6);
}));
await b.close();
