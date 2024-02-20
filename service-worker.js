// service-worker.js

const CACHE_NAME = 'spa-beauty-salon-v5';
const urlsToCache = [
  '/',
  'index.html', // Include other HTML files if needed
  'style.css',
  'service-worker.js', // Make sure to include the service worker itself
  // Add other static assets (images, etc.) here
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
