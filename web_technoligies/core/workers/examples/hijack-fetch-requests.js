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
    // request API
    // event.request.url
    // event.request.method
    // event.request.headers
    // event.request.body
    caches.match(event.request)
  );
});

// example sending a request when the(fuck) cache fails 
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// handle failure, make new request, update cache, then respond 
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        return caches.open('v1').then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });  
      });
    })
  );
});

// return an arbitrary response with headers 
new Response('<p>Hello from your friendly neighbourhood service worker!</p>', {
  headers: { 'Content-Type': 'text/html' }
});