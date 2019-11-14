var CACHE_NAME = 'weirdcoffeegame';
var urlsToCache = ['/app.780fb688.css','/app.780fb688.css.map','/cup_empty.62c83817.png','/cup_fill_1.a3d8b51e.png','/cup_fill_2.606cb127.png','/cup_fill_3.00796191.png','/cup_full.867df466.png','/cup_too_full.7fa8829d.png','/index.html','/src.a6c2777e.js','/src.a6c2777e.js.map','/serviceworker.js'];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

