const CACHE_NAME = 'alergo-v1';

const assets = [
    '/alergo/',
    '/alergo/index.html',
    '/alergo/manifest.json',
    '/alergo/icons/icon-512.png', 
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
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
