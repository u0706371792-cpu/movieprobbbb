const cacheName = 'mobywatel-cache-v1';
const assetsToCache = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './dashboard_files/css/main.css', // zmień na właściwe pliki CSS
  './dashboard_files/js/main.js'    // zmień na właściwe pliki JS
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
