
const CACHE_NAME = 'propcal-cache-v1';
const FILES_TO_CACHE = [
  '.',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((resp) => {
      return resp || fetch(evt.request).then((response) => {
        return caches.open(CACHE_NAME).then((cache) => { cache.put(evt.request, response.clone()); return response; });
      }).catch(()=>{ if(evt.request.mode==='navigate') return caches.match('./index.html'); })
    })
  );
});
