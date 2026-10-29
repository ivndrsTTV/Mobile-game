// Offline cache so the installed game runs without a connection.
const CACHE = 'voltfall-v8';
const INFECTED = ['walker1', 'walker2', 'walker3', 'walker4', 'runner', 'spitter', 'bloater', 'brute', 'boss'].map(n => './assets/infected/' + n + '.png');
const HEROINES = ['raiko', 'hayate', 'shiden', 'kurenai', 'mikan', 'shizuku', 'hoshimi', 'kohaku'].flatMap(n => ['', '-portrait', '-full'].map(k => './assets/heroines/' + n + k + '.png'));
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', ...INFECTED, ...HEROINES];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok && new URL(e.request.url).origin === location.origin) {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
