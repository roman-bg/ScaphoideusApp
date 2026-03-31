const CACHE_NAME = 'alergo-v1';
// Описваме активите с пълния им път в папката
const assets = [
    '/alergo/',
'/alergo/index.html',
'/alergo/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});

