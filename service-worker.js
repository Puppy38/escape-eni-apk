self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('game-cache').then((cache) => {
      return cache.addAll([
        'index.html',
        'style.css',    // Add your CSS file(s) here
        'script.js',    // Add your JS file(s) here
        'icon.png',     // Your icon
        // Add other assets as needed
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
