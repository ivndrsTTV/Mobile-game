// Pre-renders every heroine with the game's own renderGirl into assets/heroines:
//   <id>.png           animation sheet (rows listed in HROWS in index.html, 8 frames per row)
//   <id>-portrait.png  128x128 head portrait
//   <id>-full.png      large standing illustration for the menus
// usage: node tools/bake_heroines.js   (needs Playwright with Chromium)
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
(async () => {
  const root = path.resolve(__dirname, '..'), out = path.join(root, 'assets/heroines');
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch(); const pg = await b.newPage();
  const errs = []; pg.on('pageerror', e => errs.push(e.message));
  // block the existing baked files so every frame is drawn fresh
  await pg.route('**/assets/heroines/**', r => r.abort());
  await pg.goto('file://' + path.join(root, 'index.html')); await pg.waitForTimeout(300);
  const files = await pg.evaluate(() => {
    const res = {}, url = c => c.toDataURL('image/png');
    for (const h of __vf.HEROINES) {
      const look = heroLook(h), pal = heroGirlPal(h), sheet = document.createElement('canvas');
      sheet.width = HFW * 8; sheet.height = HFH * HROWS.length; const x = sheet.getContext('2d');
      HROWS.forEach(([view, pose, n, blink], r) => { for (let f = 0; f < n; f++) x.drawImage(renderGirl(look, pal, { view, pose, f, blink: !!blink, S: HS_S }), f * HFW, r * HFH) });
      res[h.id + '.png'] = url(sheet); res[h.id + '-portrait.png'] = url(heroPortrait(h)); res[h.id + '-full.png'] = url(heroFull(h));
    }
    return res;
  });
  for (const [name, data] of Object.entries(files)) fs.writeFileSync(path.join(out, name), Buffer.from(data.split(',')[1], 'base64'));
  console.log('wrote', Object.keys(files).length, 'files', errs.length ? errs : '');
  await b.close();
})();
