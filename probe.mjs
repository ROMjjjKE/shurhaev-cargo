import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const p = await b.newPage();
const errs = []; p.on('pageerror', e => errs.push(e.message));
await p.setViewport({ width: 1440, height: 900 });
await p.goto('http://127.0.0.1:4310/shurhaev-cargo/', { waitUntil: 'networkidle2' });
await p.evaluate(() => document.fonts.ready);
await new Promise(r => setTimeout(r, 700));
console.log(JSON.stringify(await p.evaluate(() => {
  const c = document.createElement('canvas').getContext('2d');
  const s = 'Грузоперевозки: рефрижератор, мебель, передачи — Беларусь';
  const w = f => { c.font = f; return +c.measureText(s).width.toFixed(1); };
  return {
    exo: w('600 40px "Exo 2"'), arial: w('600 40px Arial'),
    pts: w('400 40px "PT Sans"'), arial4: w('400 40px Arial'),
    rExo: +(w('600 40px "Exo 2"') / w('600 40px Arial')).toFixed(4),
    rPts: +(w('400 40px "PT Sans"') / w('400 40px Arial')).toFixed(4),
    h1: document.querySelector('h1').textContent.trim(),
    cards: document.querySelectorAll('.card').length,
    faq: document.querySelectorAll('.faq__item').length,
  };
}), null, 1), errs);
await b.close();
