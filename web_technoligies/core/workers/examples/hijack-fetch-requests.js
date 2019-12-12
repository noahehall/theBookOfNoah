// @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
// basic 
self.addEventListener('fetch', (event) => {
  event.respondWith(
    // magic goes here
  );
});

// respond with whatever was returend previously, keyed by request URL 
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
  );
});