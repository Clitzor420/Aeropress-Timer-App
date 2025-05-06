
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('aeropress-timer').then(function(cache) {
      return cache.addAll([
        'aeropress-timer-pwa-smaller.html',
        'manifest.json',
        'icon.png',
        'sw.js'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
